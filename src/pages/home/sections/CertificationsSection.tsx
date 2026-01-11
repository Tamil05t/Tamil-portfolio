import { motion } from 'framer-motion';
import { certifications } from '../../certifications/data/certifications';
import { Award, ExternalLink, Calendar, BadgeCheck } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section 
      id="certifications" 
      style={{
        padding: '100px 0',
        scrollMarginTop: '64px',
        background: 'transparent',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px'
          }}>
            Certifications & Credentials
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Professional certifications and industry-recognized credentials
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.5))',
                border: '1px solid rgba(148, 163, 184, 0.12)',
                borderRadius: '20px',
                padding: '28px',
                backdropFilter: 'blur(12px)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                target.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.15)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.borderColor = 'rgba(148, 163, 184, 0.12)';
                target.style.boxShadow = 'none';
              }}
            >
              {/* Gradient Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: cert.gradient || 'linear-gradient(90deg, #10b981, #3b82f6)',
                borderRadius: '20px 20px 0 0'
              }} />

              {/* Header with Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: cert.gradient || 'linear-gradient(135deg, #10b981, #3b82f6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 8px 16px rgba(16, 185, 129, 0.25)'
                  }}
                >
                  <Award size={28} style={{ color: '#ffffff' }} />
                </motion.div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '6px',
                    lineHeight: '1.3'
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{
                    fontSize: '0.938rem',
                    color: '#10b981',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <BadgeCheck size={16} />
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p style={{
                fontSize: '0.875rem',
                lineHeight: '1.7',
                color: '#94a3b8',
                marginBottom: '20px'
              }}>
                {cert.summary}
              </p>

              {/* Skills Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(148, 163, 184, 0.08)'
              }}>
                {cert.skills.slice(0, 3).map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      padding: '5px 12px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer with Date and Link */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.875rem',
                  color: '#64748b'
                }}>
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
                
                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = 'rgba(16, 185, 129, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = 'rgba(16, 185, 129, 0.1)';
                    }}
                  >
                    Verify
                    <ExternalLink size={14} />
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
