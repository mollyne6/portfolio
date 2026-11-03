import { contact, socialLinks } from '../data/portfolioData'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! This is a demo — the form is not connected to a backend yet.')
  }

  return (
    <section id="contact" className="contact-section reveal reveal-delay-1" aria-label="Contact section">
      <div className="contact-container">
        <div className="section-header contact-header reveal reveal-delay-2">
          <p className="section-eyebrow">{contact.eyebrow}</p>
          <h2 className="section-heading">{contact.heading}</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal reveal-delay-3">
            <p className="contact-intro">{contact.intro}</p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="detail-label">Email</span>
                <a href={`mailto:${contact.email}`} className="detail-value">
                  {contact.email}
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Alternate Email</span>
                <a href={`mailto:${contact.altEmail}`} className="detail-value">
                  {contact.altEmail}
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">{contact.location}</span>
              </div>
            </div>

            <div className="contact-social">
              <span className="social-label">Social:</span>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-card reveal reveal-delay-4">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="What is this about?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="5"
                  placeholder="Tell me more about your project or inquiry..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
