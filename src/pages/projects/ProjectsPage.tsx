import { motion } from 'framer-motion';
import Markdown from 'react-markdown';
import webVulnLabMd from '../../content/projects/web-vuln-lab.md?raw';
import cloudIamMisconfigMd from '../../content/projects/cloud-iam-misconfig.md?raw';

const projects = [
	{
		id: 'web-vuln-lab',
		title: 'Web Vulnerability Lab',
		content: webVulnLabMd,
		tags: ['OWASP', 'Pentesting', 'Python', 'Flask'],
		date: '2024-01',
		gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
	},
	{
		id: 'cloud-iam-misconfig',
		title: 'Cloud IAM Misconfiguration Scanner',
		content: cloudIamMisconfigMd,
		tags: ['AWS', 'IAM', 'Python', 'boto3'],
		date: '2024-02',
		gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut" as const,
		},
	},
};

export default function ProjectsPage() {
	return (
		<div className="container py-24">
			<motion.div 
				className="mb-20 max-w-4xl mx-auto text-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h1 className="text-6xl font-bold mb-6">Projects</h1>
				<p className="text-2xl leading-relaxed text-gray-300">
					Cybersecurity projects, labs, and tools I&apos;ve built
				</p>
			</motion.div>
			
			<motion.div 
				className="grid gap-8 max-w-6xl mx-auto"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						variants={cardVariants}
						whileHover={{ 
							y: -10,
							transition: { duration: 0.3 }
						}}
						className="card group cursor-pointer relative overflow-hidden"
					>
						{/* Animated gradient background */}
						<motion.div
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							style={{
								background: project.gradient,
								filter: 'blur(40px)',
								transform: 'scale(0.8)'
							}}
						/>
						
						<div className="relative z-10">
							<div className="flex items-start justify-between mb-4">
								<h2 className="text-3xl font-bold" style={{
									background: project.gradient,
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									backgroundClip: 'text'
								}}>
									{project.title}
								</h2>
								<span className="text-sm text-gray-400 font-mono">{project.date}</span>
							</div>
							
							<div className="prose prose-invert max-w-none mb-6">
								<Markdown>{project.content}</Markdown>
							</div>
							
							<div className="flex flex-wrap gap-3">
								{project.tags.map((tag) => (
									<motion.span
										key={tag}
										className="text-sm px-4 py-2 rounded-lg font-medium"
										style={{
											background: 'rgba(99, 102, 241, 0.2)',
											border: '1px solid rgba(129, 140, 248, 0.3)',
											color: '#818cf8'
										}}
										whileHover={{ 
											scale: 1.05,
											backgroundColor: 'rgba(99, 102, 241, 0.3)'
										}}
									>
										{tag}
									</motion.span>
								))}
							</div>
						</div>
						
						{/* Top corner accent */}
						<div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
							style={{
								background: project.gradient,
								filter: 'blur(30px)',
								borderRadius: '0 1rem 0 0'
							}}
						/>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
