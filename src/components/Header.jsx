import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18n.jsx'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="apxi">
      apx<span>i</span>
    </Link>
  )
}

export default function Header({ overlay }) {
  const { t, lang, setLang, langs } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [lang, pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={overlay ? 'header header--overlay' : 'header'}>
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
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {open && (
        <div className="nav-mobile">
          <NavLink to="/" end className="nav__link" onClick={() => setOpen(false)}>
            {t.aboutNav}
          </NavLink>
          <NavLink
            to="/projects"
            className="nav__link"
            onClick={() => setOpen(false)}
          >
            {t.projectsNav}
          </NavLink>
          <LangSwitch lang={lang} setLang={setLang} langs={langs} />
        </div>
      )}
    </header>
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
