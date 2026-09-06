import { Zap, Brain, RefreshCw, Users, Clock } from 'lucide-react';
import { strengths } from '../data/portfolioData';
import './Strengths.css';

const iconMap = {
  zap: Zap, brain: Brain, 'refresh-cw': RefreshCw, users: Users, clock: Clock,
};

export default function Strengths() {
  return (
    <section id="strengths" className="section strengths">
      <div className="container">
        <span className="section-label">// what drives me</span>
        <h2 className="section-title">My <span>Strengths</span></h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          The qualities I bring beyond technical skills.
        </p>

        <div className="strengths__grid">
          {strengths.map((s) => {
            const Icon = iconMap[s.icon] || Zap;
            return (
              <div key={s.label} className="strength-card glass-card">
                <div className="strength-card__icon">
                  <Icon size={24} />
                </div>
                <span className="strength-card__label">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
