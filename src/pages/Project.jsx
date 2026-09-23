import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getProject } from '../data/content'
import { tx, useI18n } from '../i18n/I18n.jsx'

export default function Project() {
  const { slug } = useParams()
  const { lang } = useI18n()
  const project = getProject(slug)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <Navigate to="/projects" replace />

  const gallery = project.gallery
  const photo = gallery[index] || gallery[0]

  return (
    <article className="project">
      <header className="project__intro">
        <h1>{tx(project.title, lang)}</h1>
        <p>{tx(project.description, lang)}</p>
      </header>

      <div className="project__stage">
        <button
          type="button"
          className="project__photo"
          onClick={() => setIndex((i) => (i + 1) % gallery.length)}
          aria-label={`${tx(project.title, lang)} ${index + 1}/${gallery.length}`}
        >
          <img src={photo} alt="" />
        </button>
        {gallery.length > 1 && (
          <div className="project__dots" aria-hidden="true">
            {gallery.map((_, i) => (
              <span key={i} className={i === index ? 'dot is-active' : 'dot'} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
