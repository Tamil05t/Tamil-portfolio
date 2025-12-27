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
      className="block rounded-lg border p-6 hover:bg-accent transition-colors"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <span className="text-sm text-muted-foreground">{project.date}</span>
      </div>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
