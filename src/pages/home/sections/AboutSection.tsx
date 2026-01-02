import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section 
      id="about"
      style={{ 
        padding: '6rem 0',
        background: 'var(--background-secondary)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          {/* Section Heading */}
          <h2 
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem'
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>👨‍💻</span>
            ABOUT ME
          </h2>

          {/* About Content */}
          <div style={{ textAlign: 'left' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#e5e5e5',
                marginBottom: '1.5rem'
              }}
            >
              I am a cybersecurity enthusiast driven by curiosity and continuous learning, with a strong 
              interest in ethical hacking and practical security analysis. I actively work on hands-on labs 
              and CTF challenges to understand how systems are attacked and defended in real-world scenarios.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#e5e5e5',
                marginBottom: '1.5rem'
              }}
            >
              My learning approach focuses on exploring vulnerabilities, analyzing attack surfaces, and 
              improving defensive security practices. Alongside core cybersecurity skills, I am building 
              a foundation in cloud security and modern infrastructure security. I also explore AI-assisted 
              security concepts to understand how intelligent systems can enhance threat detection.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#e5e5e5'
              }}
            >
              My goal is to grow into a skilled security professional through consistent practice and 
              real-world problem solving. I believe in learning by doing and continuously expanding my 
              knowledge to stay ahead in the ever-evolving cybersecurity landscape.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
