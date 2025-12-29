import { Link } from 'react-router-dom';

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
    <Link
      to={`/projects/${project.id}`}
      className="block border border-border bg-card rounded-lg p-6 transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <span className="text-sm text-muted-foreground ml-4 flex-shrink-0">
          {project.date}
        </span>
      </div>
      <p className="text-base leading-7 text-muted-foreground mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-3 py-1 rounded-full bg-muted text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
