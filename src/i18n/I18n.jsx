import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { copy } from '../data/content'

const I18nContext = createContext(null)

const langs = ['ru', 'en', 'by']

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('apxi-lang')
    return langs.includes(saved) ? saved : 'ru'
  })

  useEffect(() => {
    localStorage.setItem('apxi-lang', lang)
    document.documentElement.lang = lang === 'by' ? 'be' : lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: copy[lang],
      langs,
    }),
    [lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function tx(field, lang) {
  return field?.[lang] || field?.ru || ''
}
