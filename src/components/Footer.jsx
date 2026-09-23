import { site, copy } from '../data/content'
import { useI18n } from '../i18n/I18n.jsx'

export default function Footer() {
  const { lang } = useI18n()
  const t = copy[lang]

  return (
    <footer className="footer" id="contacts">
      <p className="footer__invite">{t.contactsInvite}</p>
      <div className="footer__contacts">
        <a href={site.phoneHref} className="footer__phone">
          {site.phone}
        </a>
        <span className="footer__messengers">({site.messengers})</span>
        <a href={`mailto:${site.email}`} className="footer__email">
          {site.email}
        </a>
      </div>
      <div className="footer__bar">
        <button
          type="button"
          className="footer__dot"
          aria-label="Up"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <div className="footer__social">
          <a href={site.social.behance} target="_blank" rel="noreferrer">
            Behance
          </a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
