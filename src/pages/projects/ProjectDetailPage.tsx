import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from './data/projects';
import TechStack from '../../components/ui/TechStack';

function ContentRenderer({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="list-disc pl-6 space-y-2 my-4">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
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
      elements.push(<h1 key={index} className="text-4xl font-bold mt-8 mb-4">{line.substring(2)}</h1>);
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

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="container py-12">
      <Link
        to="/projects"
        className="inline-flex items-center text-sm text-gray-400 hover:text-gray-300 mb-8 transition-colors"
      >
        ← Back to Projects
      </Link>

      <motion.article 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-400 font-mono">{project.date}</span>
          </div>
          <h1 
            className="text-5xl font-bold mb-4"
            style={{
              background: project.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {project.title}
          </h1>
          <p className="text-2xl text-gray-300 mb-6">{project.subtitle}</p>
          <TechStack tags={project.tags} animated={true} />
        </div>

        <div className="prose prose-invert max-w-none">
          <ContentRenderer content={project.content} />
        </div>
      </motion.article>
    </div>
  );
}
