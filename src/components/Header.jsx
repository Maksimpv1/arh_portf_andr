import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18n.jsx'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="apxi">
      <img src="/logo.svg" alt="apxi" width="72" height="32" />
    </Link>
  )
}

export default function Header({ overlay }) {
  const { t, lang, setLang, langs } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [menuIn, setMenuIn] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    setOpen(false)
    setMenuIn(false)
    setHidden(false)
  }, [lang, pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      setMenuIn(false)
      return
    }
    setHidden(false)
    const id = requestAnimationFrame(() => setMenuIn(true))
    return () => cancelAnimationFrame(id)
  }, [open])

  useEffect(() => {
    lastY.current = window.scrollY
    let ticking = false

    const onScroll = () => {
      if (open || ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY.current
        setScrolled(y > 12)

        if (y < 48) {
          setHidden(false)
        } else if (delta > 4) {
          setHidden(true)
        } else if (delta < -4) {
          setHidden(false)
        }

        lastY.current = y
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  const openMenu = () => {
    setHidden(false)
    setOpen(true)
  }

  const closeMenu = () => {
    setMenuIn(false)
    window.setTimeout(() => setOpen(false), 280)
  }

  const mobileMenu =
    open &&
    createPortal(
      <div
        className={menuIn ? 'nav-mobile is-in' : 'nav-mobile'}
        role="dialog"
        aria-modal="true"
      >
        <NavLink to="/" end className="nav__link" onClick={closeMenu}>
          {t.aboutNav}
        </NavLink>
        <NavLink to="/projects" className="nav__link" onClick={closeMenu}>
          {t.projectsNav}
        </NavLink>
        <LangSwitch lang={lang} setLang={setLang} langs={langs} />
      </div>,
      document.body,
    )

  return (
    <>
      <header
        className={[
          'header',
          overlay ? 'header--overlay' : '',
          open ? 'header--open' : '',
          hidden && !open ? 'header--hidden' : '',
          scrolled || open ? 'header--frost' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Logo />

        <nav className="nav nav--desktop" aria-label="Main">
          <NavLink to="/" end className="nav__link">
            {t.aboutNav}
          </NavLink>
          <NavLink to="/projects" className="nav__link">
            {t.projectsNav}
          </NavLink>
          <LangSwitch lang={lang} setLang={setLang} langs={langs} />
        </nav>

        <button
          type="button"
          className={open ? 'burger burger--open' : 'burger'}
          aria-label={open ? t.close : t.menu}
          aria-expanded={open}
          onClick={() => (open ? closeMenu() : openMenu())}
        >
          <span />
          <span />
        </button>
      </header>
      {mobileMenu}
    </>
  )
}

function LangSwitch({ lang, setLang, langs }) {
  return (
    <div className="lang" role="group" aria-label="Language">
      {langs.map((code, i) => (
        <span key={code}>
          {i > 0 && <span className="lang__sep">|</span>}
          <button
            type="button"
            className={code === lang ? 'lang__btn is-active' : 'lang__btn'}
            onClick={() => setLang(code)}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  )
}
