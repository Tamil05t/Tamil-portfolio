import ProjectList from './components/ProjectList.tsx';
import { type Project } from './components/ProjectCard.tsx';

// TODO: Move this to content management system or fetch from API
const projects: Project[] = [
  {
    id: 'web-vuln-lab',
    title: 'Web Vulnerability Lab',
    description: 'Built a vulnerable web application to practice OWASP Top 10 exploits and demonstrate security weaknesses',
    tags: ['OWASP', 'Pentesting', 'Python', 'Flask'],
    date: '2024-01',
  },
  {
    id: 'cloud-iam-misconfig',
    title: 'Cloud IAM Misconfiguration Scanner',
    description: 'Automated tool to detect IAM misconfigurations in AWS environments',
    tags: ['AWS', 'IAM', 'Python', 'boto3'],
    date: '2024-02',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground">
          Cybersecurity projects, labs, and tools I've built
        </p>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}
