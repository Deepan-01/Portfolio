import { Github, Linkedin, Mail, ChevronDown, Download, ArrowRight } from 'lucide-react';
import { personal } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />

      <div className="container hero__inner">
        {/* Left content */}
        <div className="hero__content">
          <div className="hero__greeting">
            <span className="hero__mono">Hello, world! 👋</span>
          </div>

          <h1 className="hero__name">
            <span className="hero__name-hi">Hi, I'm</span>
            <span className="hero__name-main">DEEPAN RAJ N</span>
          </h1>

          <p className="hero__title">{personal.title}</p>
          <p className="hero__tagline">{personal.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a href={personal.resumePath} download className="btn btn-outline">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline" onClick={scrollToContact}>
              Contact Me
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            {/* ← PLACEHOLDER: replace personal.github with your actual GitHub URL */}
          </div>
        </div>

        {/* Right: code window visual */}
        <div className="hero__visual">
          <div className="code-window">
            <div className="code-window__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="code-window__title">portfolio.js</span>
            </div>
            <div className="code-window__body">
              <pre className="code-content">
                <span className="c-keyword">const </span>
                <span className="c-var">developer</span>
                <span className="c-text"> = {'{'}</span>
                {'\n'}
                <span className="c-text">  name: </span>
                <span className="c-string">"Deepan Raj N"</span>
                <span className="c-text">,</span>
                {'\n'}
                <span className="c-text">  role: </span>
                <span className="c-string">"CS & Business Student"</span>
                <span className="c-text">,</span>
                {'\n'}
                <span className="c-text">  skills: [</span>
                {'\n'}
                <span className="c-string">    "React", "JavaScript",</span>
                {'\n'}
                <span className="c-string">    "Python", "Java", "C"</span>
                {'\n'}
                <span className="c-text">  ],</span>
                {'\n'}
                <span className="c-text">  openTo: </span>
                <span className="c-string">"Internships"</span>
                <span className="c-text">,</span>
                {'\n'}
                <span className="c-text">  location: </span>
                <span className="c-string">"Tamil Nadu, IN"</span>
                {'\n'}
                <span className="c-text">{'}'}</span>
                {'\n\n'}
                <span className="c-keyword">function </span>
                <span className="c-fn">hire</span>
                <span className="c-text">(developer) {'{'}</span>
                {'\n'}
                <span className="c-text">  </span>
                <span className="c-keyword">return </span>
                <span className="c-string">"Great decision! 🚀"</span>
                {'\n'}
                <span className="c-text">{'}'}</span>
                {'\n\n'}
                <span className="c-text">hire(developer)</span>
                {'\n'}
                <span className="c-comment">// → "Great decision! 🚀"</span>
                {'\n'}
                <span className="cursor-blink">▋</span>
              </pre>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__badge hero__badge--tl">
            <span className="badge-dot" />
            <span>Available for Internships</span>
          </div>
          <div className="hero__badge hero__badge--br">
            <span>78% GPA</span>
            <span className="badge-sep">·</span>
            <span>B.Tech 2028</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="hero__scroll" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
