import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, Download, ArrowRight } from 'lucide-react';
import { personal } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    // Frontend-only: no message is sent to a server.
    // To wire up email, integrate EmailJS or a form provider here.
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactItems = [
    { icon: Mail,    label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
    { icon: Phone,   label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
    { icon: MapPin,  label: 'Location', value: personal.location, href: null },
    { icon: Linkedin,label: 'LinkedIn', value: 'linkedin.com/in/deepan01', href: personal.linkedin },
    { icon: Github,  label: 'GitHub',   value: personal.github.replace('https://', ''), href: personal.github },
  ];

  return (
    <>
      {/* Resume CTA */}
      <section className="resume-cta">
        <div className="container resume-cta__inner">
          <div className="resume-cta__orb" />
          <div className="resume-cta__content">
            <h2 className="resume-cta__heading">Looking for an aspiring developer?</h2>
            <p className="resume-cta__text">
              I'm actively building my technical skills through projects, certifications, and practical experience.
              {/* ← Place your resume.pdf file in the /public folder */}
            </p>
          </div>
          <div className="resume-cta__actions">
            <a href={personal.resumePath} download className="btn btn-primary">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Get In Touch
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="section contact">
        <div className="container">
          <span className="section-label">// reach out</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-sub" style={{ marginBottom: 52 }}>
            Open to internships, collaborations, and conversations.
          </p>

          <div className="contact__grid">
            {/* Left: contact info */}
            <div className="contact__info">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="contact-item glass-card">
                  <div className="contact-item__icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="contact-item__label">{label}</span>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="contact-item__value contact-item__link">
                        {value}
                        {value.includes('ADD') && <span className="placeholder-badge">← REPLACE</span>}
                      </a>
                    ) : (
                      <span className="contact-item__value">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: form */}
            <div className="contact__form-wrap glass-card">
              <h3 className="contact__form-title">Send a Message</h3>
              <p className="contact__form-note">
                This form is frontend-only. No message is sent to a server. Connect via email or LinkedIn directly.
              </p>

              {status === 'success' && (
                <div className="form-success">
                  <CheckCircle size={18} />
                  <span>Message noted! Reach out via email for a real reply.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="form-error">Please fill in all fields before submitting.</div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
