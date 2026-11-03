import { useEffect, useState } from 'react'
import { projects } from '../data/portfolioData'

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 * index)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <article className={`project-card reveal ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${100 * index}ms` }}>
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-placeholder">
            <span className="placeholder-icon">/</span>
          </div>
        )}
        <div className="project-overlay">
          <a href={project.links.view} className="btn btn-outline btn-sm project-btn">
            View Project
          </a>
          <a href={project.links.source} className="btn btn-outline btn-sm project-btn">
            Source Code
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tag">{tech}</span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          <a href={project.links.view} className="project-link">
            View Project<span className="link-arrow">→</span>
          </a>
          <a href={project.links.source} className="project-link">
            Source Code<span className="link-arrow">→</span>
          </a>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="projects-section reveal reveal-delay-1" aria-label="Projects section">
      <div className="projects-container">
        <div className="section-header reveal reveal-delay-2">
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-heading">Projects</h2>
        </div>

        <div className="projects-grid reveal reveal-delay-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
