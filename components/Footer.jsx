'use client'

import React from "react";
import { faGithub, faLinkedin, faLinkedinIn, faStrava } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/beelauuu",
      icon: faGithub,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brian-lau-462999220/",
        icon: faLinkedin,
    },
    {
        name: "Strava",
        url: "https://www.strava.com/athletes/41098360",
        icon: faStrava,
    }
      
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((link, index) => (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-link ${link.name.toLowerCase()}`}
      >
        <FontAwesomeIcon icon={link.icon} className="social-icon" />
      </a>
    ));
  };

  return (
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-xl font-bold">&copy; Brian Lau</p>
        </div>
        <div className="flex justify-center">
          <div className="space-x-4">
            {renderSocialLinks()}
          </div>
        </div>
      </div>
  );
};

export default Footer;
