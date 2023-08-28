'use client'

import React from 'react';
import { useSpring, animated } from 'react-spring';
import NavBar from './Navbar';
import '../styles/ParallaxEffect.css'; // Create this CSS file for styling

const Hero = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyles = useSpring({
    transform: `translate3d(0, ${scrollY * 0.5}px, 0)`, // Adjust the multiplier for desired effect
  });

  return (
    <div className="parallax-container">
      <animated.div className="parallax-image" style={parallaxStyles}>
        <img alt="hi" src={'running.jpg'} />
      </animated.div>
      <div className="parallax-content">
        <NavBar />
      </div>
    </div>
  );
};

export default Hero;
