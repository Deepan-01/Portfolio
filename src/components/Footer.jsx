import { Linkedin, Github, Mail } from 'lucide-react';
import { personal } from '../data/portfolioData';
import './Footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">
            DEEPAN <span className="footer__name-accent">RAJ N</span>
          </span>
          <p className="footer__sub">Computer Science & Business Systems Student</p>
          <div className="footer__socials">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={`mailto:${personal.email}`} className="footer-social" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <nav className="footer__nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="footer-nav-link"
              onClick={(e) => scrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© 2026 Deepan Raj N. All Rights Reserved.</span>
          <span className="footer__craft">Built with React &amp; ❤️</span>
        </div>
      </div>
    </footer>
  );
}
