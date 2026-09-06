import { Github, ExternalLink, Plus, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import './Projects.css';

function ProjectCard({ project, index }) {
  if (project.placeholder) {
    return (
      <div className="project-card project-card--placeholder glass-card">
        <div className="placeholder-inner">
          <div className="placeholder-icon">
            <Plus size={28} />
          </div>
          <h3>Add Your Project</h3>
          <p>Open <code>src/data/portfolioData.js</code> and update this project entry with your own details.</p>
          <span className="placeholder-badge">← REPLACE</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card glass-card">
      <div className="project-card__header">
        <div className="project-card__num">
          <span className="project-num-text">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="project-card__links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
            <ExternalLink size={17} />
          </a>
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__features">
        {project.features.slice(0, 4).map((f) => (
          <div key={f} className="project-feature">
            <CheckCircle2 size={13} />
            <span>{f}</span>
          </div>
        ))}
      </div>

      <div className="project-card__footer">
        <div className="project-tech-stack">
          {project.technologies.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
        <div className="project-card__actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
            <Github size={14} />
            Code
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
            <ExternalLink size={14} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label">// my work</span>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          Things I've built — from ideas to working products.
        </p>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
