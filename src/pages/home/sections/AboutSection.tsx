import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      style={{
        padding: '80px 0',
        scrollMarginTop: '64px',
        background: 'transparent'
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '48px',
            textAlign: 'center',
            color: '#ffffff'
          }}
        >
          About Me
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              padding: '24px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#3b82f6'
            }}>
              Background
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#cbd5e1'
            }}>
              Cybersecurity professional specializing in penetration testing, vulnerability assessment, and ethical hacking. Passionate about securing digital infrastructure and identifying security weaknesses before malicious actors do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '12px',
              padding: '24px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#8b5cf6'
            }}>
              Experience
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#cbd5e1'
            }}>
              Experienced in web application security, network penetration testing, and vulnerability research. Active CTF player and bug bounty hunter with a proven track record of finding and responsibly disclosing security vulnerabilities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
