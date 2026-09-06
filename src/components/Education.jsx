import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { education } from '../data/portfolioData';
import './Education.css';

const icons = { degree: GraduationCap, school: BookOpen };

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <span className="section-label">// academic background</span>
        <h2 className="section-title">My <span>Education</span></h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          The foundation that shapes how I think and build.
        </p>

        <div className="edu-timeline">
          {education.map((edu, i) => {
            const Icon = icons[edu.type] || BookOpen;
            return (
              <div key={i} className="edu-timeline__item">
                {i < education.length - 1 && <div className="edu-timeline__connector" />}
                <div className="edu-dot">
                  <Icon size={16} />
                </div>
                <div className="edu-card glass-card">
                  <div className="edu-card__top">
                    <div className="edu-card__left">
                      <span className="edu-card__level">{edu.level}</span>
                      <h3 className="edu-card__branch">{edu.branch}</h3>
                      <p className="edu-card__institution">{edu.institution}</p>
                    </div>
                    <div className="edu-card__right">
                      <span className="edu-card__year">{edu.year}</span>
                      {edu.score && (
                        <div className="edu-score">
                          <Award size={14} />
                          <span>{edu.score}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
