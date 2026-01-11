import { motion } from 'framer-motion';

const skills = [
  {
    name: 'VULNERABILITY ASSESSMENT & PENETRATION TESTING',
    level: 80
  },
  {
    name: 'CAPTURE THE FLAG (CTF)',
    level: 75
  },
  {
    name: 'CLOUD COMPUTING & AI',
    level: 70
  },
  {
    name: 'CTF & VULNERABILITY RESEARCH',
    level: 80
  },
  {
    name: 'ACTIVE DIRECTORY & PRIVILEGE ESCALATION',
    level: 70
  },
];

export default function FocusSection() {
  return (
    <section className="container" style={{ padding: '6rem 2rem', maxWidth: '900px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>
          Skills & Expertise
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
          Technical capabilities and specializations
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div style={{ 
              marginBottom: '0.75rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#e5e5e5',
              letterSpacing: '0.05em'
            }}>
              {skill.name}
            </div>
            <div style={{ 
              position: 'relative',
              height: '8px',
              background: '#1a1a1a',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #ef4444, #dc2626)',
                  borderRadius: '4px'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
