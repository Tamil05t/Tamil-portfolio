interface ProjectCardProps {
  title: string
  description: string
  tags?: string[]
}

export default function ProjectCard({ title, description, tags = [] }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}
