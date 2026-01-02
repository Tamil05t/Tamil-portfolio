import { motion } from 'framer-motion';
import { siteConfig } from '../../../config/site';

export default function HeroSection() {
  const name = siteConfig.name;
  const handwritingSteps = Math.max(name.length + 2, 16);
  const handwritingWidth = `${handwritingSteps}ch`;

  return (
    <section className="container" style={{ minHeight: 'calc(100vh - 4rem)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div className="grid" style={{ gridTemplateColumns: '1fr auto', gap: '6rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ minWidth: 0 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hero-handwriting"
            style={{ 
              fontSize: '6rem',
              fontFamily: '"Permanent Marker", cursive',
              fontWeight: 700,
              lineHeight: 1.02,
              marginBottom: '1.2rem',
              color: 'transparent',
              background: 'linear-gradient(135deg, #ffffff 0%, #ff4444 50%, #cc0000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.01em',
              textTransform: 'none',
              position: 'relative',
              ['--hero-name-width' as any]: handwritingWidth,
              ['--hero-name-steps' as any]: handwritingSteps,
            }}
          >
            {name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ 
              fontSize: '1.5rem',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#3b82f6',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textAlign: 'center',
              paddingLeft: '0',
              marginBottom: '1.5rem'
            }}
          >
            Ethical Hacker
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            style={{ 
              fontSize: '0.875rem',
              fontWeight: 700,
              lineHeight: 1.4,
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}
          >
            Welcome to my portfolio!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ 
              fontSize: '1.125rem',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#a0a0a0',
              fontStyle: 'italic',
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}
          >
            "From curiosity to capability in cybersecurity."
          </motion.p>

          {/* Action Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            style={{ 
              display: 'flex',
              gap: '2.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: '#e5e5e5',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.textShadow = '0 0 20px rgba(59, 130, 246, 0.6)';
                const underline = e.currentTarget.querySelector('.underline') as HTMLElement;
                if (underline) underline.style.width = '100%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e5e5e5';
                e.currentTarget.style.textShadow = 'none';
                const underline = e.currentTarget.querySelector('.underline') as HTMLElement;
                if (underline) underline.style.width = '0%';
              }}
            >
              View Resume
              <div 
                className="underline"
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
                  transition: 'width 0.4s ease',
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                }}
              />
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: '#e5e5e5',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#10b981';
                e.currentTarget.style.textShadow = '0 0 20px rgba(16, 185, 129, 0.6)';
                const underline = e.currentTarget.querySelector('.underline') as HTMLElement;
                if (underline) underline.style.width = '100%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e5e5e5';
                e.currentTarget.style.textShadow = 'none';
                const underline = e.currentTarget.querySelector('.underline') as HTMLElement;
                if (underline) underline.style.width = '0%';
              }}
            >
              Certifications
              <div 
                className="underline"
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #10b981, transparent)',
                  transition: 'width 0.4s ease',
                  boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                }}
              />
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: '#e5e5e5',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ff4444';
                e.currentTarget.style.textShadow = '0 0 20px rgba(255, 68, 68, 0.6)';
                const underline = e.currentTarget.querySelector('.underline') as HTMLElement;
                if (underline) underline.style.width = '100%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e5e5e5';
                e.currentTarget.style.textShadow = 'none';
                const underline = e.currentTarget.querySelector('.underline') as HTMLElement;
                if (underline) underline.style.width = '0%';
              }}
            >
              Contact
              <div 
                className="underline"
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #ff4444, transparent)',
                  transition: 'width 0.4s ease',
                  boxShadow: '0 0 10px rgba(255, 68, 68, 0.5)'
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Decorative background circles */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(16, 185, 129, 0.15))',
              filter: 'blur(40px)'
            }} />
            
            {/* Main avatar circle */}
            <div style={{
              position: 'relative',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
              border: '3px solid #1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.1)'
            }}>
              {/* Placeholder icon */}
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#737373"/>
              </svg>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                border: '2px solid #3b82f6',
                borderRadius: '20px',
                opacity: 0.4
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: '80px',
                height: '80px',
                border: '2px solid #10b981',
                borderRadius: '15px',
                opacity: 0.4
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 968px) {
          .grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
