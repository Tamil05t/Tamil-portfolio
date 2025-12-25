import ProjectCard from './ProjectCard'

const projects = [
  { title: 'Project 1', description: 'Description 1', tags: ['React', 'TypeScript'] },
  { title: 'Project 2', description: 'Description 2', tags: ['Node.js', 'Express'] },
  { title: 'Project 3', description: 'Description 3', tags: ['Python', 'Django'] },
]

export default function ProjectsList() {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  )
}
