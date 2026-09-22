import { Link } from 'react-router-dom'
import { copy, projects, publications, site } from '../data/content'
import { tx, useI18n } from '../i18n/I18n.jsx'

export default function Home() {
  const { lang } = useI18n()
  const t = copy[lang]
  const featured = projects[projects.length - 1]

  return (
    <>
      <section className="hero" aria-label="apxi">
        <img src="/images/about-hero.jpg" alt="" />
      </section>

      <section className="about">
        <div className="about__col">
          <h1>{t.aboutTitle}</h1>
          <p className="about__lead">{t.aboutLead}</p>
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>

          <h2>{t.publicationsTitle}</h2>
          <ul className="pubs">
            {publications.map((item) => (
              <li key={`${item.source}-${item.year}`}>
                {item.year} – {item.project} – {item.source}
              </li>
            ))}
          </ul>

          <p className="about__invite">{t.contactsInvite}</p>
          <div className="about__contacts">
            <a href={site.phoneHref}>
              {site.phone} <span>({site.messengers})</span>
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>

      <Link to={`/projects/${featured.slug}`} className="featured">
        <img src={featured.cover} alt={tx(featured.title, lang)} />
        <span className="featured__name">{tx(featured.title, lang)}</span>
        <span className="featured__year">{featured.year}</span>
      </Link>
    </>
  )
}
