'use client'

import React, { useEffect, useState, useRef } from 'react';
import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';
import SectionTreeStyle from'./sectionTrue.module.css';

const SectionTrue = () => {
  const [opacity, setOpacity] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const cargarObjeto = (entradas, observador) => {
      entradas.forEach((entrada) => {
        const intersectionRatio = entrada.intersectionRatio;
        const newOpacity = intersectionRatio >= 0.9 ? 0 : 1 - intersectionRatio;
        setOpacity(newOpacity);
      });
    };

    const observador = new IntersectionObserver(cargarObjeto, {
      threshold: 0.1,
    });

    if (sectionElement) {
      observador.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observador.unobserve(sectionElement);
      }
    };
  }, []);

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: '¿QUÉ HACEMOS?',
    description: {
      title: 'POTENCIAMOS TU MARCA.',
      text:
        'Te ayudamos a generar un flujo constante de clientes, a generar una relación con ellos y a convertirlos en embajadores de Marca. En definitiva "Aumentamos la rentabilidad de tu empresa".',
    },
    buttonText: 'CONOCER MÁS',
    buttonLink: '../QueHacemos'
  };

  return (
    <div className={SectionTreeStyle.sectionContainer} ref={sectionRef}>
      <div
        className={SectionTreeStyle.sectionContent}
        style={{
          '--opacity': opacity,
          '--scale': opacity >= 0.9 ? 0 : 1,
        }}
      >
        <TextoSection
          imageUrl={sectionData.imageUrl}
          altText={sectionData.altText}
          title={sectionData.title}
          description={sectionData.description}
          buttonText={sectionData.buttonText}
          buttonLink={sectionData.buttonLink}
        />
      </div>
    </div>
  );
};

export default SectionTrue;