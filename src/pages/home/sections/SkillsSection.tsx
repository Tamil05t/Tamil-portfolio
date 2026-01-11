import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: '????' },
  { name: 'JavaScript', icon: '???' },
  { name: 'React', icon: '??????' },
  { name: 'Docker', icon: '????' },
  { name: 'Kubernetes', icon: '??????' },
  { name: 'AWS', icon: '??????' },
  { name: 'Linux', icon: '????' },
  { name: 'Burp Suite', icon: '????' },
];

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
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
          Skills
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '16px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                backdropFilter: 'blur(8px)',
                transition: 'transform 0.2s ease'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
                {skill.icon}
              </div>
              <div style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#cbd5e1'
              }}>
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
