'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutMe = () => {
  const [typingText, setTypingText] = useState('');
  const text = "Hi, I'm Brian!";
  const typingSpeed = 150; // Milliseconds per character
  const eraseSpeed = 150;   // Milliseconds per character during erasing
  const eraseDelay = 1000; // Delay before re-typing

  useEffect(() => {
    typeText();
  }, []);

  const typeText = () => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypingText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        eraseText();
      }
    }, typingSpeed);
  };

  const eraseText = () => {
    let currentIndex = text.length;
    const eraseInterval = setInterval(() => {
      if (currentIndex >= 0) {
        setTypingText(text.slice(0, currentIndex));
        currentIndex--;
      } else {
        clearInterval(eraseInterval);
        setTimeout(() => {
          typeText();
        }, eraseDelay);
      }
    }, eraseSpeed);
  };
  return (
    <div>
        <div className="w-full w-screen h-full text-center bg-gradient-to-b from-red-600 via-red-400 to-orange-400">
        <div className="text-center mt-3">
        <p className="text-5xl font-bold underline leading-[1.15] text-black sm:text-6xl;">About Me</p>
        </div>
            <br/>
            <p className="head_text">{typingText}</p>
            <br/><br/>
            <p className="text-2xl font-bold">
                I'm a 3rd year student @ University Of Maryland: College Park🐢</p>
            <br/><br/>
            <p className="text-2xl font-bold">
            I'm a Computer Science👨🏻‍💻 and Applied Math🔢 double major</p>
            <br/><br/>
            <p className="text-2xl font-bold">
            This summer, I was a Software Development Engineering Intern @ Amazon on the Amazon Display Ads (ADA) 🛍️ Team</p>
            <br/><br/>
            <p className="text-2xl font-bold">
            I was an intern last summer @ Northrop Grumman in the Mission Systems Department🚀</p>
            <br/><br/>
            <p className="text-2xl font-bold">
            In my free time, I like to run🏃, road bike🚴‍♂️, and of course code🛠️</p>
            <a href="Brian%20Lau%20Summer%202024.pdf" download>
            <br/><br/>
          <button className="bg-white hover:bg-red-500 text-black font-bold py-3 px-7 rounded">
            Click to download my resume!
          </button>
        </a>
            <br></br><br></br><br></br>
        </div>
    </div>
  );
};

export default AboutMe;

