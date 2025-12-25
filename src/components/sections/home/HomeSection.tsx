import HeroSection from './HeroSection'
import Experience from './Experience'
import GithubProjects from './GithubProjects'
import Skills from './Skills'
import SkillsShowcase from './SkillsShowcase'

export default function HomeSection() {
  return (
    <section id="home" className="home-section">
      <HeroSection />
      <Experience />
      <Skills />
      <SkillsShowcase />
      <GithubProjects />
    </section>
  )
}
