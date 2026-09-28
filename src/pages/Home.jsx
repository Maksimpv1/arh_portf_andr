import { Reveal } from '../components/Reveal.jsx'
import { copy, publications } from '../data/content'
import { useI18n } from '../i18n/I18n.jsx'

export default function Home() {
  const { lang } = useI18n()
  const t = copy[lang]

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
          </div>
        </section>
      </div>
    </div>
  )
}
