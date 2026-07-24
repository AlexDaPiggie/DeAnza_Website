import { useState } from 'react';
import './Navbar.css';

// The links shown in the navbar. Keeping them in an array like this
// (instead of writing 4 separate <a> tags) means adding a 5th link
// later is a one-line change, not copy-pasting a whole block.
const NAV_LINKS = [
  { label: 'Student Registration', href: '#registration' },
  { label: 'Transferring', href: '#transfer' },
  { label: 'VTA Card', href: '#vta' },
  { label: 'Campus Map', href: '#map' },
];

function Navbar() {
  // isMenuOpen tracks whether the mobile hamburger menu is expanded.
  // useState gives us a variable (isMenuOpen) and a function to update
  // it (setIsMenuOpen). React re-renders the component whenever
  // setIsMenuOpen is called.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((open) => !open);
  }

  return (
    <header className="navbar">
      <a href="#home" className="navbar__logo">
        main.cpp
      </a>

      {/* Hamburger button — only visible on small screens (see CSS) */}
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

      {/* The `navbar__links--open` class is added only when the menu
          is open, which is what lets the CSS show/hide it on mobile. */}
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
