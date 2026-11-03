import { about } from '../data/portfolioData'

const About = () => {
  return (
    <section id="about" className="about-section reveal reveal-delay-1" aria-label="About section">
      <div className="about-container">
        <div className="section-header reveal reveal-delay-2">
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-heading">{about.heading}</h2>
        </div>

        <div className="about-grid">
          <div className="about-content reveal reveal-delay-3">
            <p className="about-intro">{about.intro}</p>
            <div className="about-goal">
              <h3>Career Goal</h3>
              <p>{about.goals}</p>
            </div>
          </div>

          <div className="about-visual reveal reveal-delay-4">
            <div className="profile-card">
              <div className="profile-card-header">
                <span className="profile-tag">Profile Snapshot</span>
                <span className="profile-status-dot" aria-hidden="true" />
              </div>

              <div className="profile-stats">
                <div className="profile-stat">
                  <span className="profile-stat-label">Learning</span>
                  <strong>ICT</strong>
                </div>
                <div className="profile-stat">
                  <span className="profile-stat-label">Focus</span>
                  <strong>Web</strong>
                </div>
                <div className="profile-stat">
                  <span className="profile-stat-label">Location</span>
                  <strong>Siaya</strong>
                </div>
              </div>

              <div className="profile-detail-group">
                <div className="profile-detail">
                  <span className="profile-detail-label">Education</span>
                  <p>{about.education.qualification}</p>
                </div>
                <div className="profile-detail">
                  <span className="profile-detail-label">Attachment</span>
                  <p>{about.industrialAttachment.institution}</p>
                </div>
              </div>

              <div className="profile-tags" aria-label="Areas of interest">
                {about.interests.map((interest, i) => (
                  <span key={i} className="profile-tag-item">{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
