import { motion } from 'framer-motion';

const contacts = [
  { icon: '????', label: 'Email', value: 'contact@example.com', link: 'mailto:contact@example.com' },
  { icon: '????', label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', link: 'https://linkedin.com/in/yourprofile' },
  { icon: '????', label: 'GitHub', value: 'github.com/yourprofile', link: 'https://github.com/yourprofile' },
];

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      style={{
        padding: '80px 0 120px',
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
          Contact
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: '12px',
                padding: '24px',
                backdropFilter: 'blur(8px)',
                textDecoration: 'none',
                display: 'block',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '12px'
              }}>
                {contact.icon}
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '8px'
              }}>
                {contact.label}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#94a3b8'
              }}>
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
