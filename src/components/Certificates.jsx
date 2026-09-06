import { Award, ExternalLink, Shield } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import './Certificates.css';

const issuers = {
  'Infosys Springboard': '#0080ff',
  'Coursera': '#0056d3',
  'NPTEL': '#ff6b35',
};

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <span className="section-label">// credentials</span>
        <h2 className="section-title">My <span>Certifications</span></h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          Verified learning from recognised platforms.
        </p>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card glass-card">
              <div className="cert-card__icon">
                <Award size={26} />
              </div>
              <div className="cert-card__body">
                <h3 className="cert-card__title">{cert.title}</h3>
                <div className="cert-card__issuer">
                  <Shield size={12} />
                  <span style={{ color: issuers[cert.issuer] || 'var(--blue-light)' }}>
                    {cert.issuer}
                  </span>
                </div>
              </div>
              <a
                href={cert.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card__btn btn btn-outline"
                title="Replace viewUrl in portfolioData.js with your certificate link"
              >
                <ExternalLink size={13} />
                View
                {cert.viewUrl.includes('ADD') && (
                  <span className="placeholder-badge">← REPLACE</span>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
