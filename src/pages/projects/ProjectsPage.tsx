import { type Project } from './components/ProjectCard.tsx';

const projects = [
	{
		id: 'web-vuln-lab',
		title: 'Web Vulnerability Lab',
		description:
			'Built a vulnerable web application to practice OWASP Top 10 exploits and demonstrate security weaknesses. Includes SQL injection, XSS, CSRF, and authentication bypass vulnerabilities.',
		tags: ['OWASP', 'Pentesting', 'Python', 'Flask'],
		date: '2024-01',
	},
	{
		id: 'cloud-iam-misconfig',
		title: 'Cloud IAM Misconfiguration Scanner',
		description:
			'Automated tool to detect IAM misconfigurations in AWS environments. Scans for overly permissive policies, unused credentials, and privilege escalation paths.',
		tags: ['AWS', 'IAM', 'Python', 'boto3'],
		date: '2024-02',
	},
];

export default function ProjectsPage() {
	return (
		<div className="container py-24">
			<div className="mb-16 max-w-3xl">
				<h1 className="text-5xl font-bold mb-6">Projects</h1>
				<p className="text-xl leading-relaxed text-muted-foreground">
					Cybersecurity projects, labs, and tools I&apos;ve built
				</p>
			</div>
			<div className="max-w-3xl space-y-6">
				{projects.map((project) => (
					<div
						key={project.id}
						className="border border-border bg-card rounded-lg p-6 hover:border-primary/50 transition-colors"
					>
						<div className="flex items-start justify-between mb-3">
							<h2 className="text-2xl font-semibold">{project.title}</h2>
							<span className="text-sm text-muted-foreground">{project.date}</span>
						</div>
						<p className="text-base leading-7 text-muted-foreground mb-4">{project.description}</p>
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
					</div>
				))}
			</div>
		</div>
	);
}
