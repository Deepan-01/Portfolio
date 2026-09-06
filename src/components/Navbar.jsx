import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personal } from '../data/portfolioData';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionId = (href) => href.replace('#', '');

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNav(e, '#home')}>
          <span className="logo-text">DEEPAN</span>
          <span className="logo-accent"> RAJ N</span>
        </a>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeSection === sectionId(link.href) ? ' nav-link--active' : ''}`}
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={personal.resumePath}
          download
          className="btn btn-primary navbar__resume"
        >
          <Download size={15} />
          Resume
        </a>

        <button
          className="navbar__burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`mobile-link${activeSection === sectionId(link.href) ? ' mobile-link--active' : ''}`}
            onClick={(e) => handleNav(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={personal.resumePath}
          download
          className="btn btn-primary"
          style={{ marginTop: '8px', justifyContent: 'center' }}
          onClick={() => setMobileOpen(false)}
        >
          <Download size={15} />
          Download Resume
        </a>
      </div>
    </header>
  );
}
