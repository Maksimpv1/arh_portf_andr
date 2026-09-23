import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import { tx, useI18n } from '../i18n/I18n.jsx'

export default function Projects() {
  const { lang } = useI18n()

  return (
    <section className="projects" aria-label="Projects">
      {projects.map((project) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className="project-card"
        >
          <img src={project.cover} alt={tx(project.title, lang)} />
          <span className="project-card__name">{tx(project.title, lang)}</span>
          <span className="project-card__year">{project.year}</span>
        </Link>
      ))}
    </section>
  )
}
