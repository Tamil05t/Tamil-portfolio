import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="block border-2 border-border/60 bg-card rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-card/80"
      >
        <div className="flex items-start justify-between mb-5 gap-6">
          <h3 className="text-2xl font-semibold text-foreground leading-snug tracking-tight">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground/80 flex-shrink-0 font-mono uppercase tracking-wider pt-1">
            {project.date}
          </span>
        </div>
        <p className="text-base leading-7 text-muted-foreground mb-5 max-w-prose">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded border border-border/40 bg-secondary/50 text-foreground/90 font-mono uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
