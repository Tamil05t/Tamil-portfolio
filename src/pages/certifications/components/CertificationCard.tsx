import { motion } from 'framer-motion';
import type { Certification } from '../data/certifications';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export default function CertificationCard({ certification, index }: CertificationCardProps) {
  const handleClick = () => {
    if (certification.credentialUrl) {
      window.open(certification.credentialUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={handleClick}
      className="group relative cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '32px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        minHeight: '240px',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(59, 130, 246, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: certification.gradient.replace('linear-gradient', 'radial-gradient(circle at top right,') + ', transparent 70%)',
          opacity: 0.08,
        }}
      />

      {/* Icon/Badge */}
      <div 
        className="mb-4 relative z-10"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: `${certification.gradient}, rgba(0,0,0,0.5)`,
          backgroundBlendMode: 'overlay',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <svg 
          className="w-7 h-7" 
          fill="none" 
          stroke="white" 
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 relative z-10">
        <h3 
          className="text-xl font-bold mb-2 group-hover:text-[#60a5fa] transition-colors duration-300"
          style={{
            color: '#ffffff',
            lineHeight: '1.3',
          }}
        >
          {certification.title}
        </h3>

        <p 
          className="text-sm mb-1"
          style={{
            color: '#9ca3af',
            fontWeight: '500',
          }}
        >
          {certification.issuer}
        </p>

        <p 
          className="text-xs mb-4"
          style={{
            color: '#6b7280',
          }}
        >
          {new Date(certification.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </p>

        <p 
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{
            color: '#9ca3af',
          }}
        >
          {certification.summary}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {certification.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: '#93c5fd',
                fontWeight: '500',
              }}
            >
              {skill}
            </span>
          ))}
          {certification.skills.length > 3 && (
            <span
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(156, 163, 175, 0.08)',
                border: '1px solid rgba(156, 163, 175, 0.2)',
                color: '#9ca3af',
                fontWeight: '500',
              }}
            >
              +{certification.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* View Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
        className="relative z-10 inline-flex items-center gap-2 group/btn"
        style={{
          padding: '10px 18px',
          borderRadius: '8px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          color: '#60a5fa',
          fontSize: '13px',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          alignSelf: 'flex-start',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
          e.currentTarget.style.transform = 'translateX(4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <span>View Certificate</span>
        <svg 
          className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </motion.div>
  );
}
