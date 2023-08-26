'use client'

import React, { useState } from 'react';
import styled from 'styled-components';
import { DiJava, DiPython, DiJavascript, DiCsharpPlain } from 'react-icons/di';
import { SiTypescript, SiOcaml, SiC, SiCplusplus, SiCsharp, SiLatex, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiSass, SiBootstrap, SiFlask, SiDjango, SiJunit5, SiJupyter, SiPandas, SiNumpy, SiScikitlearn, SiUnity, SiAwslambda, SiAmazoncloudwatch, SiAmazons3, SiAmazondynamodb, SiTensorflow, SiDocker, SiGit, SiJira, SiConfluence, SiAmazonaws, SiVim, SiGnuemacs, SiGnubash, SiWindows, SiApple, SiLinux, SiJenkins, SiMarkdown, SiPostman, SiApachemaven } from 'react-icons/si';

import {
  DiCss3,
  DiHtml5,
  DiPhp,
  DiRuby,
  DiRust,
  DiMysql,
} from 'react-icons/di';

import {
  FaCalculator,
  FaCube
} from 'react-icons/fa';

const HexagonWrapper = styled.div`
  width: 100px;
  height: 115px;
  background-color: ${({ highlighted, color }) =>
    highlighted ? '#fff' : color};
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  z-index: 1; /* Add z-index to make hexagons appear below the navbar */
`;


const SkillName = styled.div`
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  margin-top: 5px;
`;

const Hexagon = ({ skillName, color }) => {
  const [highlighted, setHighlighted] = useState(false);

  const iconMap = {
    Java: DiJava,
    Python: DiPython,
    JavaScript: DiJavascript,
    TypeScript: SiTypescript,
    C: SiC,
    'C++': SiCplusplus,
    'C#': SiCsharp,
    CSS: DiCss3,
    HTML: DiHtml5,
    OCaml: SiOcaml,
    PHP: DiPhp,
    Ruby: DiRuby,
    Rust: DiRust,
    SQL: DiMysql,
    MATLAB: FaCube,
    LaTeX: SiLatex,
    React: SiReact,
    NodeJS: SiNodedotjs,
    MongoDB: SiMongodb,
    TailwindCSS: SiTailwindcss,
    SASS: SiSass,
    Bootstrap: SiBootstrap,
    Tensorflow: SiTensorflow,
    Flask: SiFlask,
    Django: SiDjango,
    JUnit: SiJunit5,
    Jupyter: SiJupyter,
    Matplotlib: FaCalculator,
    Pandas: SiPandas,
    NumPy: SiNumpy,
   "Scikit Learn": SiScikitlearn,
    Unity: SiUnity,
    Lambda: SiAwslambda,
    CloudWatch: SiAmazoncloudwatch,
    S3: SiAmazons3,
    DynamoDB: SiAmazondynamodb,
    Docker: SiDocker,
    Git: SiGit,
    Jira: SiJira,
    Confluence: SiConfluence,
    AWS: SiAmazonaws,
    Vim: SiVim,
    Emacs: SiGnuemacs,
    Bash: SiGnubash,
    Windows: SiWindows,
    Mac: SiApple,
    Linux: SiLinux,
    Jenkins: SiJenkins,
    Markdown: SiMarkdown,
    Postman: SiPostman,
    Maven: SiApachemaven
  };

  const IconComponent = iconMap[skillName];

  return (
    <HexagonWrapper
      highlighted={highlighted}
      color={color}
      onMouseEnter={() => setHighlighted(true)}
      onMouseLeave={() => setHighlighted(false)}
    >
      {IconComponent && <IconComponent size={50} />}
      <SkillName>{skillName}</SkillName>
    </HexagonWrapper>
  );
};

export default Hexagon;
