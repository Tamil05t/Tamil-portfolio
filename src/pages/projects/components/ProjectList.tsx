import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from '../../../components/ui/ProjectModal';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      {/* Grid Layout */}
      <div 
        className="grid gap-8"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project} 
            onClick={() => handleProjectClick(project)}
            index={index}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
