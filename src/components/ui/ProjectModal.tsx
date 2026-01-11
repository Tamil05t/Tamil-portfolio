import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../pages/projects/data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function ContentRenderer({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.JSX.Element[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="list-disc pl-6 space-y-2 my-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-gray-300">{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushCodeBlock = () => {
    if (codeBlockContent.length > 0) {
      elements.push(
        <pre key={elements.length} className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg my-4 overflow-x-auto">
          <code className="text-sm">{codeBlockContent.join('\n')}</code>
        </pre>
      );
      codeBlockContent = [];
    }
  };

  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        flushCodeBlock();
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    if (line.startsWith('# ')) {
      flushList();
      elements.push(<h1 key={index} className="text-4xl font-bold mt-8 mb-4 first:mt-0">{line.substring(2)}</h1>);
    } else if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(3)}</h2>);
    } else if (line.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(4)}</h3>);
    } else if (line.startsWith('- ')) {
      if (!inList) {
        inList = true;
      }
      listItems.push(line.substring(2));
    } else if (line.trim() === '') {
      flushList();
      elements.push(<div key={index} className="h-4" />);
    } else {
      flushList();
      if (line.trim()) {
        elements.push(<p key={index} className="text-gray-300 leading-relaxed mb-4">{line}</p>);
      }
    }
  });

  flushList();
  flushCodeBlock();

  return <>{elements}</>;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div 
                className="sticky top-0 z-10 px-8 py-6 border-b border-gray-800"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h2 className="text-4xl font-bold text-white">
                        {project.title}
                      </h2>
                      <span className="text-sm text-gray-500 font-mono">{project.number}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-200 flex items-center justify-center group"
                    aria-label="Close modal"
                  >
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto px-8 py-6" style={{ maxHeight: 'calc(90vh - 200px)' }}>
                <div className="prose prose-invert max-w-none">
                  <ContentRenderer content={project.content} />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
