import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal.jsx'
import { copy, projects, publications, site } from '../data/content'
import { tx, useI18n } from '../i18n/I18n.jsx'

export default function Home() {
  const { lang } = useI18n()
  const t = copy[lang]
  const featured = projects[projects.length - 1]

  return (
    <div className="home-stack">
      <div className="home-top">
        <section className="hero" aria-label="apxi">
          <div className="hero__fill" aria-hidden="true" />
          <div className="hero__align">
            <div className="hero__align-inner">
              <Reveal as="div" className="reveal--media hero__photo-wrap" delay={120}>
                <img
                  className="hero__photo"
                  src="/images/about-people.png?v=2"
                  alt=""
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="about__col">
            <Reveal as="h1" delay={0}>
              {t.aboutTitle}
            </Reveal>
            <Reveal as="p" className="about__lead" delay={60}>
              {t.aboutLead}
            </Reveal>
            <Reveal as="p" delay={100}>
              {t.aboutP1}
            </Reveal>
            <Reveal as="p" delay={140}>
              {t.aboutP2}
            </Reveal>

            <Reveal as="h2" delay={40}>
              {t.publicationsTitle}
            </Reveal>
            <Reveal as="ul" className="pubs" delay={80}>
              {publications.map((item) => (
                <li key={`${item.source}-${item.year}`}>
                  {item.year} – {item.project} – {item.source}
                </li>
              ))}
            </Reveal>

            <Reveal as="p" className="about__invite" delay={40}>
              {t.contactsInvite}
            </Reveal>
            <Reveal as="div" className="about__contacts" delay={80}>
              <a href={site.phoneHref}>
                {site.phone} <span>({site.messengers})</span>
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </Reveal>
          </div>
        </section>
      </div>

      <Reveal as="div" className="featured-reveal reveal--media" delay={0}>
        <Link to={`/projects/${featured.slug}`} className="featured">
          <img src={featured.cover} alt={tx(featured.title, lang)} />
          <span className="featured__name">{tx(featured.title, lang)}</span>
          <span className="featured__year">{featured.year}</span>
        </Link>
      </Reveal>
    </div>
  )
}
