import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ActionSection() {
  return (
    <section className="container" style={{ padding: '6rem 2rem' }} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card"
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center',
          padding: '4rem 3rem',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#f8fafc' }}>
          Explore My Work
        </h2>
        
        <p style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Check out my projects and read my notes on cybersecurity topics
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/projects">
            <motion.button
              className="button button-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: '1rem 2.5rem', fontSize: '1.0625rem' }}
            >
              View Projects
            </motion.button>
          </Link>
          <Link to="/notes">
            <motion.button
              className="button button-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: '1rem 2.5rem', fontSize: '1.0625rem' }}
            >
              Read Notes
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
