'use client'

import React from 'react';
import styled from 'styled-components';
import Hexagon from './Hexagon';

const GridWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const skillsData = [
  { name: 'Java', color: '#ff003c' },
  { name: 'Python', color: '#ff003c' },
  { name: 'JavaScript', color: '#ff003c'  },
  { name: 'TypeScript', color: '#ff003c' },
  { name: 'C', color: '#ff003c' },
  { name: 'C++', color: '#ff003c' },
  { name: 'C#', color: '#ff003c' },
  { name: 'CSS', color: '#ff003c' },
  { name: 'HTML', color: '#ff003c' },
  { name: 'OCaml', color: '#ff003c' },
  { name: 'PHP', color: '#ff003c' },
  { name: 'Ruby', color: '#ff003c' },
  { name: 'Rust', color: '#ff003c' },
  { name: 'SQL', color: '#ff003c' },
  { name: 'MATLAB', color: '#ff003c' },
  { name: 'LaTeX', color: '#ff003c' },
];

const frameworks = [
  { name: 'React', color: '#ff6700'},
  { name: 'NodeJS', color: '#ff6700'},
  { name: 'MongoDB', color: '#ff6700'},
  { name: 'TailwindCSS', color: '#ff6700'},
  { name: 'SASS', color: '#ff6700'},
  { name: 'Bootstrap', color: '#ff6700'},
  { name: 'Flask', color: '#ff6700'},
  { name: 'Django', color: '#ff6700'},
  { name: 'JUnit', color: '#ff6700'},
  { name: 'Jupyter', color: '#ff6700'},
  { name: 'Matplotlib', color: '#ff6700'},
  { name: 'Pandas', color: '#ff6700'},
  { name: 'NumPy', color: '#ff6700'},
  { name: 'Scikit Learn', color: '#ff6700'},
  { name: 'Tensorflow', color: '#ff6700'},
  { name: 'Unity', color: '#ff6700'},
  { name: 'Lambda', color: '#ff6700'},
  { name: 'CloudWatch', color: '#ff6700'},
  { name: 'S3', color: '#ff6700'},
  { name: 'DynamoDB', color: '#ff6700'}
];

const misc = [
  { name: 'Docker', color: '#FFF01F'},
  { name: 'Git', color: '#FFF01F'},
  { name: 'Jira', color: '#FFF01F'},
  { name: 'Confluence', color: '#FFF01F'},
  { name: 'AWS', color: '#FFF01F'},
  { name: 'Vim', color: '#FFF01F'},
  { name: 'Emacs', color: '#FFF01F'},
  { name: 'Bash', color: '#FFF01F'},
  { name: 'Windows', color: '#FFF01F'},
  {name: 'Mac', color: '#FFF01F'},
  { name: 'Linux', color: '#FFF01F'},
  { name: 'Jenkins', color: '#FFF01F'},
  { name: 'Markdown', color: '#FFF01F'},
  { name: 'Postman', color: '#FFF01F'},
  { name: 'Maven', color: '#FFF01F'},
];

const Skills = () => {
  return (
    <div className="w-full w-screen h-full text-center bg-gradient-to-b from-red-400 via-orange-400 to-yellow-500">
    <p className="text-5xl font-bold underline leading-[1.15] text-black sm:text-6xl;">Skills</p>
    <br/><br/>
    <p className="mb-5 text-3xl leading-[1.15] text-black sm:text-4xl font-semibold">Languages</p>
    <GridWrapper>
      {skillsData.map((skill, index) => (
        <Hexagon skillName={skill.name} color={skill.color}/>
      ))}
    </GridWrapper>
    <br/><br/>
    <p className="mt-5 mb-5 text-3xl leading-[1.15] text-black sm:text-4xl font-semibold">Frameworks/Libraries</p>
    <GridWrapper>
      {frameworks.map((skill, index) => (
        <Hexagon skillName={skill.name} color={skill.color}/>
      ))}
    </GridWrapper>
    <br/><br/>
    <p className="mt-5 mb-5 text-3xl leading-[1.15] text-black sm:text-4xl font-semibold">Developer Tools/Misc.</p>
    <GridWrapper>
      {misc.map((skill, index) => (
        <Hexagon skillName={skill.name} color={skill.color}/>
      ))}
    </GridWrapper>
    <br/><br/>
    </div>
  );
};

export default Skills;
