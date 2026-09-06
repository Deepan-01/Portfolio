import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { experience } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="section-label">// work history</span>
        <h2 className="section-title">Internship <span>Experience</span></h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          Hands-on industry exposure during my academic journey.
        </p>

        <div className="timeline">
          {experience.map((exp, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__line" />
              <div className="timeline__dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline__card glass-card">
                <div className="exp-card__header">
                  <div className="exp-card__company-wrap">
                    <div className="exp-card__company-icon">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h3 className="exp-card__company">{exp.company}</h3>
                      <span className="exp-card__type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="exp-card__meta">
                    <span className="exp-card__role">{exp.role}</span>
                    <span className="exp-card__duration">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="exp-card__divider" />

                <ul className="exp-card__responsibilities">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="responsibility-item">
                      <CheckCircle2 size={15} className="responsibility-icon" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
