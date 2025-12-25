import SectionTitle from './SectionTitle'
import ProjectsList from './ProjectsList'
import Animations from './Animations'

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <SectionTitle title="Projects" subtitle="My recent work" />
      <ProjectsList />
      <Animations />
    </section>
  )
}
