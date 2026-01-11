import { motion } from 'framer-motion';
import ProjectList from './components/ProjectList';

export default function ProjectsPage() {
	return (
		<section className="py-16" id="projects">
			<div className="container mx-auto px-6 md:px-64">
				{/* Decorative background effects */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<motion.div 
						className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl top-0 left-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
					/>
					<motion.div 
						className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl bottom-0 right-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
					/>
				</div>

				<div className="relative">
					<motion.div 
						className="mb-16 space-y-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
							<div className="space-y-4 max-w-2xl">
								<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
									Featured Work & Projects
								</h2>
								<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
									A curated selection of my professional work and personal projects, showcasing expertise in{' '}
									<span className="text-primary">full-stack development</span>,{' '}
									<span className="text-primary">UI/UX design</span>, and{' '}
									<span className="text-primary">cloud architecture</span>.
								</p>
							</div>
							<div className="flex items-center">
								<a 
									href="https://github.com" 
									target="_blank" 
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative text-primary-foreground bg-primary hover:bg-primary/90 h-10 w-full md:w-auto rounded-2xl px-4 sm:px-5 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 shadow-lg shadow-primary/5 hover:shadow-primary/10 font-medium"
								>
									View Github
									<div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
										<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
										</svg>
									</div>
								</a>
							</div>
						</div>

						<div className="flex items-center gap-6 pt-2 overflow-x-auto pb-2 scrollbar-hide">
							<div className="space-y-1 flex-shrink-0">
								<span className="text-xl sm:text-2xl font-bold text-primary">50+</span>
								<p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Projects Completed</p>
							</div>
							<div className="w-px h-8 sm:h-10 bg-primary/10 flex-shrink-0"></div>
							<div className="space-y-1 flex-shrink-0">
								<span className="text-xl sm:text-2xl font-bold text-primary">3+</span>
								<p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Years Experience</p>
							</div>
						</div>

						<div className="h-px w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5"></div>
					</motion.div>
					
					<ProjectList />
				</div>
			</div>
		</section>
	);
}
