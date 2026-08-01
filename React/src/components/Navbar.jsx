import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/deanza-logo.png'
import { Menu, X } from 'lucide-react'

const navigation = [
  ['/registration', 'Student Registration'],
  ['/transferring', 'Transferring'],
  ['/vta-card', 'VTA Card'],
  ['/campus-map', 'Campus Map'],
  ['/about', 'About Us'],
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = (mobile = false) =>
    navigation.map(([to, label]) => (
      <NavLink
        key={to}
        to={to}
        onClick={mobile ? () => setIsMenuOpen(false) : undefined}
      >
        {label}
      </NavLink>
    ))

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-nav">
        <div className="nav-container">
          <NavLink className="brand" to="/" aria-label="De Anza home">
            <img src={logo} alt="De Anza College" />
          </NavLink>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {links()}
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav
            id="mobile-menu"
            className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Mobile navigation"
          >
            {links(true)}
          </nav>
        </div>
      </nav>
    </header>
  )
}
