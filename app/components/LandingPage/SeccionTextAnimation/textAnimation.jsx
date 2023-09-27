'use client'

import React, { useEffect, useState } from 'react';

const TextAnimatedSection = ({ backgroundImage, content }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const sectionElement = document.getElementById('animatedSection');

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        const intersectionRatio = entry.intersectionRatio;
        const newOpacity = intersectionRatio >= 0.9 ? 0 : 1 - intersectionRatio;
        setOpacity(newOpacity);
      });
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (sectionElement) {
      intersectionObserver.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        intersectionObserver.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <div
      id="animatedSection"
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacity,
          transition: 'opacity 0.7s ease-in-out',
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default TextAnimatedSection;
