'use client'

import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    FaAmazon,
} from 'react-icons/fa';
import {
    GiTurtleShell,
    GiSubmarineMissile
} from 'react-icons/Gi';


const Experience = () => {
  return (
    <div className="w-full w-screen h-full bg-gradient-to-b from-yellow-500 via-green-400 to-blue-500">
    <div className="text-center mb-3">
    <p className="text-5xl font-bold underline leading-[1.15] text-black sm:text-6xl;">Experience</p>
    </div>
    <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="May 2023 - August 2023"
          icon={<FaAmazon/>}
          iconStyle={{ background: '#fff', color: '#000' }}
        >
        <div className="text-left">
          <h3 className="mt-5 text-2xl font-extrabold leading-[1.15] text-black sm:text-2xl orange_gradient vertical-timeline-element-title">Software Development Engineering Intern @ Amazon - Advertising</h3>
          <br/>
          <p>• Served as part of the Amazon Display Ads (ADA) organization more specifically the 1PM team.</p>
          <br/><br/>
          <p>• Provided better insight into the “health” of over 1,500+ high value actions (HVA) across multiple AWS accounts & regions through stage metric alarms and visible click/impression counts on an internal UI saving time for on call engineers, marketing managers, and internal advertisers</p>
          <br/><br/>
          <p>• Implemented metric alarms based on the stages of an high-value action with React TypeScript, Java, AWS Lambda, CloudWatch, Redshift, and IAM</p>
          <br/><br/>
          <p>• Set up API endpoints using Java & AWS Smithy in order to expose HVA metadata for use across multiple different packages.</p>
          <br/><br/>
          <p>• Displayed and improved visibility of an HVA’s click/impression counts through React TypeScript, a scheduled SQL query, AWS Lambda, Redshift, and S3.</p>
          <br/><br/>
          <p>• Operated in a high-intensity Scrum environment with 2 week sprints utilizing daily stand ups, Kanban boards, and SIM tickets</p>
        </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="June 2022 - Current"
          icon={<GiTurtleShell/>}
          iconStyle={{ background: '#fff', color: '#000' }}
        >
        <div className="text-left">
          <h3 className="mt-5 text-2xl font-extrabold leading-[1.15] text-black sm:text-2xl rose_gradient vertical-timeline-element-title">Lead TA @ University of Maryland: College Park - CMSC</h3>
          <br/>
          <p>• Serving/Served as lead TA for</p>
          <br/>
          <p>1. CMSC122 (Introduction to Computer Programming)</p>
          <br/>
          <p>2. CMSC131 (Object Oriented Programming I)</p>
          <br/>
          <p>3. CMSC132 (Object Oriented Programming II)</p>
          <br/><br/>
          <p>• Create rubrics and manage exam and project grading for over 300+ students</p>
          <br/><br/>
          <p>• Teach a discussion section of ~30 students on a bi-weekly basis, reviewing course content and exploring new topics.</p>
          <br/><br/>
          <p>• Hold weekly office hours for students, helping answer any questions and guide them on projects</p>
          <br/><br/>
          <p>• Grade hundreds of projects and exams for style and accuracy</p>
          <br/><br/>
          <p>• Proctor exams/quizzes and uphold academic integrity of over 300+ students</p>
        </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="May 2022 - August 2022"
          icon={<GiSubmarineMissile/>}
          iconStyle={{ background: '#fff', color: '#000' }}
        >
        <div className="text-left">
          <h3 className="mt-5 text-2xl font-extrabold leading-[1.15] text-black sm:text-2xl black_gradient vertical-timeline-element-title">Software Engineering Intern @ Northrop Grumman - Mission Systems</h3>
          <br/>
          <p>• Utilized the Atlassian SDK accompanied by HTML, Java, and Python to create a home made Jira plugin.</p>
          <br/><br/>
          <p>• Worked with the Jira REST API and web hooks to gather information on the current server. </p>
          <br/><br/>
          <p>• Created a Java servlet with a Java backend and Python + HTML/CSS frontend to display all plugin information onto the current Jira network</p>
          <br/><br/>
          <p>• Employed Jenkins CI/CD and Bitbucket to streamline more efficient builds and tests of the plugin.</p>
        </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    <br/><br/>
   
    </div>
  );
};

export default Experience;
