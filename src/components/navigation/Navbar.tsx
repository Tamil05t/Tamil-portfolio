import { navItems } from '../../config/navigation';
import NavLink from './NavLink.tsx';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '2rem',
        zIndex: 50
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.25rem',
        padding: '0.5rem',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '0.75rem',
        border: '1px solid rgba(59, 130, 246, 0.4)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)'
      }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink href={item.href}>
              {item.label}
            </NavLink>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
