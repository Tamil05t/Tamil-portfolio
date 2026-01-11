import { useEffect, useState } from 'react';
import HeroSection from './sections/HeroSection.tsx';
import AboutSection from './sections/AboutSection.tsx';
import ExperienceSection from './sections/ExperienceSection.tsx';
import ProjectsSection from './sections/ProjectsSection.tsx';
import SkillsSection from './sections/SkillsSection.tsx';
import CertificationsSection from './sections/CertificationsSection.tsx';
import ContactSection from './sections/ContactSection.tsx';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          window.history.replaceState(null, '', `#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveSection(hash);
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    (window as any).__activeSection = activeSection;
    window.dispatchEvent(new CustomEvent('activeSectionChange', { detail: activeSection }));
  }, [activeSection]);

  return (
    <>
      <section id="home" style={{ minHeight: '100vh', scrollMarginTop: '0', paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        <HeroSection />
      </section>
      
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
