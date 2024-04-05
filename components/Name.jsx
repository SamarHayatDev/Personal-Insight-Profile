"use client";
import React, { useState, useEffect } from "react";

const Name = ({ name }) => {
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const nameLength = name.length;
    let currentIndex = 0;

    // Typing Animation
    const typingInterval = setInterval(() => {
      setTypedName(name.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > nameLength) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedName("");
          setTimeout(() => {
            currentIndex = 0;
            typingAnimation();
          }, 5000); // Pause for 5 seconds before restarting
        }, 500); // Typing animation duration less than 0.5 seconds
      }
    }, 50); // Adjust the interval for typing speed

    const typingAnimation = () => {
      let typingInterval = setInterval(() => {
        // Change const to let here
        setTypedName(name.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex > nameLength) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypedName("");
            setTimeout(() => {
              currentIndex = 0;
              typingAnimation();
            }, 5000); // Pause for 5 seconds before restarting
          }, 500); // Typing animation duration less than 0.5 seconds
        }
      }, 5500); // Adjust the interval for typing speed
    };

    typingAnimation(); // Start the typing animation

    return () => clearInterval(typingInterval);
  }, [name]);

  return <h3>{typedName}</h3>;
};

export default Name;
