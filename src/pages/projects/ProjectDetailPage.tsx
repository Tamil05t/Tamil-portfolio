import { useParams, Link } from 'react-router-dom';

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();

  // TODO: Fetch project details based on projectId
  // For now, display placeholder

  return (
    <div className="container py-12">
      <Link
        to="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        ← Back to Projects
      </Link>

      <article className="prose dark:prose-invert max-w-none">
        <h1>Project: {projectId}</h1>
        <p className="lead">
          Project details will be loaded from markdown content here.
        </p>
        
        <h2>Overview</h2>
        <p>
          This is a placeholder for the project content. 
          Content will be loaded from /content/projects/{projectId}.md
        </p>

        <h2>Technologies Used</h2>
        <ul>
          <li>Technology 1</li>
          <li>Technology 2</li>
          <li>Technology 3</li>
        </ul>

        <h2>Key Features</h2>
        <p>Features and implementation details will go here.</p>
      </article>
    </div>
  );
}
