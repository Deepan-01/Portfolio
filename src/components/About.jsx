import { MapPin, GraduationCap, Calendar, Percent, Target } from 'lucide-react';
import { personal } from '../data/portfolioData';
import './About.css';

const infoCards = [
  { icon: MapPin, label: 'Location', value: personal.location },
  { icon: GraduationCap, label: 'Degree', value: personal.degree },
  { icon: Calendar, label: 'Graduation', value: personal.graduation },
  { icon: Percent, label: 'Current GPA', value: personal.percentage },
  { icon: Target, label: 'Career Goal', value: personal.careerGoal },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__left">
          <span className="section-label">// who am i</span>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about__text">
            <p>
              I am a first-year B.Tech student specialising in{' '}
              <strong>Computer Science and Business Systems</strong> at V.S.B Engineering
              College, Karur. My academic journey is driven by a genuine enthusiasm for
              building software that solves real problems.
            </p>
            <p>
              I'm deeply interested in <strong>Software Development</strong> and{' '}
              <strong>Web Development</strong>, and I spend a considerable portion of my
              free time sharpening my skills through personal projects, online
              certifications, and exploring new technologies. I believe in learning by
              doing — which is why I've already completed an internship, built
              full-stack web projects, and earned certifications from Infosys,
              Coursera, and NPTEL.
            </p>
            <p>
              My goal is to join a forward-thinking organisation as a software
              developer where I can contribute meaningfully, grow continuously, and
              turn challenging problems into elegant solutions.
            </p>
          </div>

          <div className="about__interests">
            {['Software Dev', 'Web Dev', 'Programming', 'Problem Solving', 'Continuous Learning'].map((item) => (
              <span key={item} className="interest-tag">{item}</span>
            ))}
          </div>
        </div>

        <div className="about__right">
          <div className="info-grid">
            {infoCards.map(({ icon: Icon, label, value }) => (
              <div key={label} className="info-card glass-card">
                <div className="info-card__icon">
                  <Icon size={18} />
                </div>
                <div className="info-card__body">
                  <span className="info-card__label">{label}</span>
                  <span className="info-card__value">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
