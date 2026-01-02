import { motion } from 'framer-motion';

const focusAreas = [
  {
    title: 'Web Security',
    description: 'OWASP Top 10, vulnerability assessment, and penetration testing',
    icon: '🔒'
  },
  {
    title: 'Cloud Security',
    description: 'AWS/Azure security configurations and IAM best practices',
    icon: '☁️'
  },
  {
    title: 'Threat Intelligence',
    description: 'Security research and threat hunting techniques',
    icon: '🎯'
  },
];

export default function FocusSection() {
  return (
    <section className="container" style={{ padding: '6rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>
          Focus Areas
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
          Specializing in cutting-edge cybersecurity domains
        </p>
      </motion.div>

      <div className="grid grid-cols-3" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {focusAreas.map((area, index) => (
          <motion.div
            key={area.title}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              {area.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f8fafc' }}>
              {area.title}
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-cols-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
