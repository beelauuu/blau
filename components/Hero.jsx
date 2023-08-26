'use client'

import React, { useState, useEffect } from 'react';
import photo from '../public/running.jpg'; // Replace with the actual path to your photo
import '../styles/ParallaxEffect.css'; // Create this CSS file for styling
import Image from 'next/image';
import NavBar from './Navbar';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const tickingRef = React.useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.pageYOffset);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container bg-neutral-600 w-screen w-full h-full">
      <div
        className="parallax-image"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image alt="hi" src={photo} />
      </div>
      <div className="parallax-content">
        <NavBar />
      </div>
    </div>
  );
};

export default Hero;

