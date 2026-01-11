import { motion } from 'framer-motion';
import { siteConfig } from '../../../config/site';

export default function ActionSection() {
  const contactMethods = [
    {
      name: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}?subject=Portfolio Contact&body=Hi,`,
      icon: '📧',
      label: 'Send me an email'
    },
    {
      name: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: siteConfig.linkedin,
      icon: '💼',
      label: 'View LinkedIn profile'
    },
    {
      name: 'GitHub',
      value: 'Check out my code',
      href: siteConfig.github,
      icon: '💻',
      label: 'View GitHub profile'
    }
  ];

  return (
    <section className="container" style={{ padding: '6rem 2rem' }} id="contact">
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
          Get In Touch
        </h2>
        
        <p style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          I'm always open to discussing cybersecurity opportunities, collaborations, or just connecting with fellow security enthusiasts
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.name !== 'Email' ? '_blank' : undefined}
              rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (method.name === 'Email') {
                  e.preventDefault();
                  window.location.href = method.href;
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="button button-primary"
              style={{ 
                padding: '1rem 2rem', 
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>{method.icon}</span>
              <span>{method.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
