'use client'
import React from 'react';
import Image from 'next/image';
import Cloud from '../public/cloud.png';
import Clown from '../public/clown.png';
import NBA from '../public/nba.gif';
import Plugin from '../public/plugin.jpg';
import Material from '../public/material.jpg';
import Portfolio from '../public/snip.png';

const projectsData = [
  {
    id: 1,
    title: 'Cloudify',
    description: 'Spotify API based web application which allows users to generate a unique wordcloud based on their top 50 artists.',
    imageUrl: Cloud,
    technologies: ['Python', 'JavaScript', 'Flask', 'React', 'Bootstrap'],
    link: 'https://cloudify.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Strava Jokes',
    description: 'Strava based web application allowing users across the world to subscribe to a random joke of the day uploaded on their Strava activities through a custom webhook',
    imageUrl: Clown,
    technologies: ['Python', 'TypeScript', 'Flask', 'React','TailwindCSS'],
    link: 'https://jokepy.vercel.app/',
  },
  {
    id: 3,
    title: 'NBA Hall of Fame Predictor',
    description: 'Jupyter Notebook based machine learning project which predicts whether a player will be inducted into the NBA Hall of Fame based on their career statistics.',
    imageUrl: NBA,
    technologies: ['Python','Pandas', 'Numpy','Scikit Learn','Matplotlib','Tensorflow'],
    link: 'https://beelauuu.github.io/NBA-Hall-of-Fame-Predictor/',
  },
  {
    id: 4,
    title: 'BoringAhhPlugin',
    description: 'Chrome extension allowing users to overlay popular videos of games such as Minecraft and Subway Surfers over boring lectures.',
    imageUrl: Plugin,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/beelauuu/BoringAhhPlugin',
  },
  {
    id: 5,
    title: 'TA Site',
    description: 'Website created to house my TAing resources for each semester.',
    imageUrl: Material,
    technologies: ['TypeScript', 'React', 'Bootstrap', 'TailwindCSS'],
    link: 'https://beelau.vercel.app/',
  },
  {
    id: 6,
    title: 'blau.io',
    description: 'Old portfolio site made in React and SCSS.',
    imageUrl: Portfolio,
    technologies: ['JavaScript', 'SCSS', 'HTML', 'React'],
    link: 'https://beelau.netlify.app/',
  },
  // ...more projects
];

const Projects = () => {
    return (
      <div className="w-full w-screen h-full text-center bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 overflow-x-hidden">
        <div className="text-center">
        <p className="text-5xl font-bold underline leading-[1.15] text-black sm:text-6xl;">Projects</p>
        </div>
        <br/><br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              className="block bg-white p-4 shadow-md rounded-md transform transition-transform hover:scale-105 mb-4 md:ml-5 md:mr-3"
            >
              <div className="h-80 md:h-96 max-w-xs rounded-md overflow-hidden flex items-center justify-center mx-auto">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800} // Adjust the width to your preference
                  height={800} // Adjust the height to your preference
                  objectFit="cover"
                  className="object-center"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-3 flex flex-wrap space-x-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-200 px-2 py-1 rounded-md text-sm text-gray-600 mb-1">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;