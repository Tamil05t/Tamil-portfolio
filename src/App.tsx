import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomeSection from './components/sections/home/HomeSection'
import AboutSection from './components/sections/about/AboutSection'
import ProjectsSection from './components/sections/projects/ProjectsSection'
import ContactSection from './components/sections/contact/ContactSection'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
