import { useEffect, useState } from 'react'
import { spotlight } from '../data/portfolioData'

const SpotlightItem = ({ item, index }) => {
  const iconPaths = {
    document: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />',
    users: '<circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />',
    layout: '<path d="M22 12h-4l-3 9L9 3l-3 9H2" />',
    network: '<path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />',
  }

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 * index)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <article className={`spotlight-card reveal ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${100 * index}ms` }}>
      <div className="spotlight-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconPaths[item.icon] || '' }} />
      </div>
      <div className="spotlight-info">
        <div className="spotlight-label">{item.title}</div>
        <div className="spotlight-meta">{item.meta}</div>
      </div>
      <a className="spotlight-action" href={item.href} target="_blank" rel="noreferrer">
        {item.actionLabel}
      </a>
    </article>
  )
}

const Spotlight = () => {
  return (
    <section id="spotlight" className="spotlight-section reveal reveal-delay-1" aria-label="Attachment spotlight section">
      <div className="spotlight-container">
        <div className="section-header reveal reveal-delay-2">
          <p className="section-eyebrow">{spotlight.eyebrow}</p>
          <h2 className="section-heading">{spotlight.heading}</h2>
          <p className="spotlight-intro">{spotlight.intro}</p>
        </div>

        <div className="spotlights-grid reveal reveal-delay-3">
          {spotlight.items.map((item, index) => (
            <SpotlightItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Spotlight
