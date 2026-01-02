import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link 
      to={href}
      style={{
        position: 'relative',
        display: 'inline-block'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          color: isActive ? '#ffffff' : '#e5e5e5',
          fontSize: '0.9375rem',
          fontWeight: isActive ? 600 : 500,
          transition: 'all 0.2s',
          padding: '0.5rem 1.25rem',
          borderRadius: '0.5rem',
          background: isActive ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : 'transparent',
          boxShadow: isActive ? '0 4px 6px -1px rgba(59, 130, 246, 0.4)' : 'none'
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
            e.currentTarget.style.color = '#ffffff';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#e5e5e5';
          }
        }}
      >
        {children}
      </motion.div>
    </Link>
  );
}
