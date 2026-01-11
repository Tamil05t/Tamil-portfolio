import { motion } from 'framer-motion';

const education = {
  degree: 'BACHELOR OF COMPUTER SCIENCE AND ENGINEERING WITH A SPECIALIZATION IN CYBERSECURITY',
  duration: '2021 - 2025',
  institution: 'Your University, Location',
  description: 'Throughout my CSE journey, I have developed a strong foundation in computer science and programming, mastering languages such as C, C++, Java, Python, JavaScript, PHP and Bash. I\'ve gained proficiency in database management, and MySQL, alongside an in-depth understanding of operating systems, computer fundamentals, and computer networking.'
};

const experiences = [
  {
    title: 'WEB DEVELOPMENT INTERN',
    company: 'Company Name',
    duration: 'June 2023 - July 2023',
    responsibilities: [
      'Created and implemented dynamic web pages using HTML, CSS, and PHP',
      'Developed working login page with user authentication',
      'Installed and configured applications locally using WAMP server',
      'Implemented secure frontend-backend integration processes'
    ]
  },
  {
    title: 'CYBERSECURITY INTERN',
    company: 'Company Name',
    duration: 'Aug 2023 - Sep 2023',
    responsibilities: [
      'Conducted security assessments and vulnerability testing',
      'Analyzed security threats and provided recommendations',
      'Implemented security best practices for web applications',
      'Documented security findings and remediation steps'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <>
      {/* Education Section */}
      <section className="container" style={{ padding: '6rem 2rem 3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '3rem',
            color: '#ffffff',
            textAlign: 'center'
          }}>
            Education
          </h2>

          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '8px',
              top: '20px',
              bottom: '0',
              width: '2px',
              background: '#3b82f6'
            }} />

            {/* Timeline item */}
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              {/* Icon dot */}
              <div style={{
                position: 'absolute',
                left: '-2.5rem',
                top: '0',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#3b82f6',
                border: '3px solid #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ffffff'
                }} />
              </div>

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#a0a0a0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem'
              }}>
                {education.degree}
              </h3>

              <div style={{
                fontSize: '0.875rem',
                color: '#10b981',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}>
                {education.duration}
              </div>

              <div style={{
                fontSize: '0.95rem',
                color: '#cbd5e1',
                fontStyle: 'italic',
                marginBottom: '1rem'
              }}>
                {education.institution}
              </div>

              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: '#e5e5e5'
              }}>
                {education.description}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Professional Experience Section */}
      <section className="container" style={{ padding: '3rem 2rem 6rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '3rem',
            color: '#ffffff',
            textAlign: 'center'
          }}>
            Professional Experience
          </h2>

          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '8px',
              top: '20px',
              bottom: '0',
              width: '2px',
              background: '#10b981'
            }} />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                style={{ position: 'relative', marginBottom: '3rem' }}
              >
                {/* Icon dot */}
                <div style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#10b981',
                  border: '3px solid #000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#ffffff'
                  }} />
                </div>

                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#a0a0a0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem'
                }}>
                  {exp.title}
                </h3>

                <div style={{
                  fontSize: '0.875rem',
                  color: '#3b82f6',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>
                  {exp.duration}
                </div>

                <div style={{
                  fontSize: '0.95rem',
                  color: '#cbd5e1',
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}>
                  {exp.company}
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: '#e5e5e5',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        color: '#10b981'
                      }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
