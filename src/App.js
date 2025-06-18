import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles

import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import { skills, projects, ContactObj } from './staticData.js';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="portfolio-app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <div id="home" data-aos="fade-in">
          <Hero setActiveSection={setActiveSection} resumeFileName={ContactObj.resume} />
        </div>

        <div id="about" data-aos="fade-up">
          <About setActiveSection={setActiveSection} github={ContactObj.github} />
        </div>

        <div id="skills" data-aos="fade-up">
          <Skills setActiveSection={setActiveSection} skills={skills} />
        </div>

        <div id="projects" data-aos="fade-up">
          <Projects setActiveSection={setActiveSection} projects={projects} />
        </div>

        <div id="contact" data-aos="fade-up">
          <Contact setActiveSection={setActiveSection} Contact={ContactObj} />
        </div>
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
