import { useEffect, useRef } from 'react'

/** Soft editorial reveal — Losko-like fade, no hard jump */
export function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in')
      return
    }

    // Already on screen (e.g. top of page) — fade in gently after paint
    const rect = el.getBoundingClientRect()
    const inView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 40

    if (inView) {
      const t = window.setTimeout(() => el.classList.add('is-in'), 40 + delay)
      return () => window.clearTimeout(t)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-in')
        io.unobserve(el)
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <Tag
      ref={ref}
      className={['reveal', className].filter(Boolean).join(' ')}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
