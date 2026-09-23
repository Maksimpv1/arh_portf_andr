import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal.jsx'
import { getProject } from '../data/content'
import { tx, useI18n } from '../i18n/I18n.jsx'

export default function Project() {
  const { slug } = useParams()
  const { lang } = useI18n()
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <Navigate to="/projects" replace />

  const gallery = project.gallery

  return (
    <article className="project">
      <header className="project__intro">
        <Reveal as="div" className="project__intro-inner" delay={40}>
          <h1>{tx(project.title, lang)}</h1>
          {project.meta && (
            <p className="project__meta">{tx(project.meta, lang)}</p>
          )}
          <p>{tx(project.description, lang)}</p>
        </Reveal>
      </header>

      <div className="project__gallery">
        {gallery.map((src, i) => (
          <Reveal
            key={`${src}-${i}`}
            as="figure"
            className="project__shot reveal--media"
            delay={Math.min(i * 50, 200)}
          >
            <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
          </Reveal>
        ))}
      </div>
    </article>
  )
}
