import { profile } from '../data/portfolioData'

const Hero = () => {
  return (
    <section id="home" className="hero-section reveal reveal-delay-1" aria-label="Hero section">
      <div className="bg-glow">
        <div className="glow-orb glow-1" />
        <div className="glow-orb glow-2" />
        <div className="glow-orb glow-3" />
      </div>
      <div className="hero-container">
        <div className="hero-content reveal reveal-delay-2">
          <div className="hero-eyebrow">Hello, I&rsquo;m</div>
          <h1 className="hero-title">
            {profile.name}<span className="gradient-text">{' '}</span>
          </h1>
          <div className="typing-container">
            <span className="typing-text">Aspiring Software Developer</span>
          </div>
          <p className="hero-description">{profile.headline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-social reveal reveal-delay-3">
            <span className="hero-social-label">Connect with me:</span>
            <div className="hero-social-links">
              {profile.emailContact && (
                <a href={`mailto:${profile.emailContact}`} className="hero-social-link" aria-label="Email">
                  {profile.emailContact.split('@')[0]}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-4">
          <div className="hero-profile-card">
            <div className="hero-card-header">
              <span className="hero-card-badge">Available for work</span>
              <span className="hero-card-dot" aria-hidden="true" />
            </div>

            <div className="hero-card-grid">
              <div className="hero-mini-card">
                <span>Focus</span>
                <strong>Frontend</strong>
              </div>
              <div className="hero-mini-card">
                <span>Skills</span>
                <strong>React</strong>
              </div>
              <div className="hero-mini-card">
                <span>Projects</span>
                <strong>3+</strong>
              </div>
            </div>

            <div className="hero-card-copy">
              <p>Building accessible, modern experiences for communities and brands.</p>
            </div>

            <div className="hero-card-tags" aria-label="Tech stack">
              <span>UI Design</span>
              <span>JavaScript</span>
              <span>Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
