import {
  Code, Terminal, Coffee, Globe, Palette, Zap, Layers,
  Code2, CircleDot, MessageSquare, Users, Lightbulb, CheckCircle, Brain
} from 'lucide-react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  code: Code, terminal: Terminal, coffee: Coffee, globe: Globe,
  palette: Palette, zap: Zap, layers: Layers, 'code-2': Code2,
  'circle-dot': CircleDot, 'message-square': MessageSquare, users: Users,
  lightbulb: Lightbulb, 'check-circle': CheckCircle, brain: Brain,
};

function SkillBadge({ name, icon }) {
  const Icon = iconMap[icon] || Code;
  return (
    <div className="skill-badge">
      <div className="skill-badge__icon">
        <Icon size={16} />
      </div>
      <span>{name}</span>
    </div>
  );
}

const categories = [
  { title: 'Programming Languages', subtitle: 'Core languages', items: skills.languages, accent: '#6366f1' },
  { title: 'Web Technologies', subtitle: 'Frontend stack', items: skills.web, accent: '#8b5cf6' },
  { title: 'Development Tools', subtitle: 'IDE & editors', items: skills.tools, accent: '#22d3ee' },
  { title: 'Soft Skills', subtitle: 'Interpersonal strengths', items: skills.soft, accent: '#a78bfa' },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-label">// what i know</span>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="section-sub">A snapshot of the technologies and tools I work with.</p>
        </div>

        <div className="skills__grid">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-category glass-card">
              <div className="skill-category__head">
                <div
                  className="skill-category__accent"
                  style={{ background: cat.accent }}
                />
                <div>
                  <h3 className="skill-category__title">{cat.title}</h3>
                  <p className="skill-category__sub">{cat.subtitle}</p>
                </div>
              </div>
              <div className="skill-category__items">
                {cat.items.map((s) => (
                  <SkillBadge key={s.name} name={s.name} icon={s.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
