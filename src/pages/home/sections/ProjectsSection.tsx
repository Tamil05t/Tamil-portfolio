import { motion } from 'framer-motion';
import { projects } from '../../projects/data/projects';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
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
            Featured Projects
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {projects.slice(0, 6).map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))',
                border: '1px solid rgba(148, 163, 184, 0.1)',
                borderRadius: '20px',
                overflow: 'hidden',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.borderColor = 'rgba(148, 163, 184, 0.1)';
                target.style.boxShadow = 'none';
              }}
            >
              {/* Card Header with Number Badge */}
              <div style={{
                position: 'relative',
                padding: '32px 28px 24px',
                borderBottom: '1px solid rgba(148, 163, 184, 0.08)'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#3b82f6',
                  background: 'rgba(59, 130, 246, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  {project.number || `#${String(index + 1).padStart(2, '0')}`}
                </span>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                  paddingRight: '60px',
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  fontSize: '0.938rem',
                  lineHeight: '1.7',
                  color: '#94a3b8',
                  marginBottom: '0'
                }}>
                  {project.summary}
                </p>
              </div>

              {/* Tech Stack */}
              <div style={{
                padding: '20px 28px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                background: 'rgba(0, 0, 0, 0.2)'
              }}>
                {project.tags.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.813rem',
                      fontWeight: 500,
                      padding: '6px 14px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.12)',
                      color: '#cbd5e1',
                      border: '1px solid rgba(148, 163, 184, 0.15)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span style={{
                    fontSize: '0.813rem',
                    fontWeight: 500,
                    padding: '6px 14px',
                    color: '#64748b'
                  }}>
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>

              {/* Card Footer with Actions */}
              <div style={{
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(148, 163, 184, 0.08)'
              }}>
                <span style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  fontWeight: 500
                }}>
                  View Details
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ExternalLink size={18} style={{ color: '#3b82f6' }} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '64px',
            textAlign: 'center'
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
