import React from 'react';
import AboutMe from '@components/AboutMe';
import Hero from '@components/Hero';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Projects from '@components/Projects';

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default Home;
