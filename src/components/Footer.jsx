import { profile } from '../data/portfolioData'

const Footer = () => {
  return (
    <footer className="footer reveal reveal-delay-1" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="brand-mark">M</span>
          <span className="brand-name">Mollyne</span>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} {profile.fullName}. Built with purpose for thoughtful digital experiences.
        </p>
      </div>
    </footer>
  )
}

export default Footer
