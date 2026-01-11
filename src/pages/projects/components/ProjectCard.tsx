import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(59, 130, 246, 0.3), 0 0 30px -10px rgba(59, 130, 246, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Animated gradient overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 70%)',
        }}
      />

      {/* Project Number Badge */}
      <div 
        className="absolute top-4 right-4 z-10"
        style={{
          background: 'rgba(59, 130, 246, 0.15)',
          backdropFilter: 'blur(10px)',
          padding: '4px 12px',
          borderRadius: '20px',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          fontSize: '12px',
          fontWeight: '600',
          color: '#60a5fa',
        }}
      >
        {project.number}
      </div>

      {/* Image/Visual Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
          }}
        />
        
        {/* Glow effect on image */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 
          className="text-xl font-bold leading-tight group-hover:text-[#60a5fa] transition-colors duration-300"
          style={{
            color: '#ffffff',
            lineHeight: '1.3',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p 
          className="text-sm leading-relaxed line-clamp-3"
          style={{
            color: '#9ca3af',
            lineHeight: '1.6',
          }}
        >
          {project.summary}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="group/tag relative overflow-hidden"
              style={{
                fontSize: '11px',
                padding: '6px 12px',
                borderRadius: '6px',
                background: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: '#93c5fd',
                fontWeight: '500',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              style={{
                fontSize: '11px',
                padding: '6px 12px',
                borderRadius: '6px',
                background: 'rgba(156, 163, 175, 0.1)',
                border: '1px solid rgba(156, 163, 175, 0.2)',
                color: '#9ca3af',
                fontWeight: '500',
              }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden"
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              border: '1px solid rgba(59, 130, 246, 0.5)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px -3px rgba(59, 130, 246, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(4px)';
              e.currentTarget.style.boxShadow = '0 6px 20px -3px rgba(59, 130, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px -3px rgba(59, 130, 246, 0.3)';
            }}
          >
            <span>View Details</span>
            <svg 
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
