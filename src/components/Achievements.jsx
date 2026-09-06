import { Award, Briefcase, Code2, TrendingUp } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const iconMap = {
  award: Award,
  briefcase: Briefcase,
  'code-2': Code2,
  'trending-up': TrendingUp,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <span className="section-label">// milestones</span>
        <h2 className="section-title">Achievements <span>&amp; Highlights</span></h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          Moments that mark my growth as a developer.
        </p>

        <div className="ach__grid">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Award;
            return (
              <div key={i} className="ach-card glass-card">
                <div className="ach-card__icon">
                  <Icon size={22} />
                </div>
                <p className="ach-card__text">{ach.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
