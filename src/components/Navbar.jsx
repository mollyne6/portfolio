import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => setIsOpen(false)} role="button" tabIndex={0}>
          <span className="brand-mark">M</span>
          <span className="brand-name">Mollyne</span>
        </div>

        <div
          className={`navbar-menu ${isOpen ? 'open' : ''}`}
          aria-hidden={!isOpen}
        >
          <ul className="navbar-list">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar-item">
                <a className="navbar-link" href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <a href="#contact" className="btn btn-primary btn-sm">
              Contact Me
            </a>
            <button className="btn btn-link hamburger" onClick={toggleMenu} aria-label="Toggle menu">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
