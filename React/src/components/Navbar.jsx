import { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Student Registration', href: '#registration' },
  { label: 'Transferring', href: '#transfer' },
  { label: 'VTA Card', href: '#vta' },
  { label: 'Campus Map', href: '#map' },
  { label: 'About Us', href: '#about' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((open) => !open);
  }

  return (
    <header className="navbar">
      <a href="#home" className="navbar__logo" aria-label="Home">
        <img
          src="/Main.Cpp_logo.png"
          alt="main.cpp logo"
          className="navbar__logoImage"
        />
      </a>

      <button
        className="navbar__toggle"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
