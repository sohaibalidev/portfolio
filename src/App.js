import React, { useState } from 'react';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import { skills, projects, ContactObj } from './src/staticData.js'
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio-app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero id="home" setActiveSection={setActiveSection} resumeFileName={ContactObj.resume} />
        <About id="about" setActiveSection={setActiveSection} github={ContactObj.github} />
        <Skills id="skills" setActiveSection={setActiveSection} skills={skills} />
        <Projects id="projects" setActiveSection={setActiveSection} projects={projects} />
        <Contact id="contact" setActiveSection={setActiveSection} Contact={ContactObj} />
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;