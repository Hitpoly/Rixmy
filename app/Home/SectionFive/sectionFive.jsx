'use client'

import React, { useEffect, useState } from 'react';
import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';
import SectionFiveStyle from './sectionFive.module.css';

const SectionFive = () => {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const sectionFive = document.getElementById('sectionFive');

    const cargarElemento = (entradas, observador) => {
      entradas.forEach((entrada) => {
        const intersectionRatio = entrada.intersectionRatio;
        const newScale = intersectionRatio >= 0.1 ? 1 : 0;
        setScale(newScale);
      });
    };

    const observador = new IntersectionObserver(cargarElemento, {
      threshold: [0.1],
    });

    if (sectionFive) {
      observador.observe(sectionFive);
    }

    return () => {
      if (sectionFive) {
        observador.unobserve(sectionFive);
      }
    };
  }, []);

  const SectionFiveData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'TRABAJEMOS',
    description: {
      title: '¿QUIERES PERTENECER A UN EQUIPO DE CAMPEONES?',
      text:
        'Aprovecha la OPORTUNIDAD de trabajar con profesionales de primer nivel, que desean crecer contigo y llavarte a un verdadero proceso de CRECIMIENTO INTERNACIONAL. Tendrás la oportunidad de conocer el verdadero PODER del INBOUND MARKETING',
    },
    buttonLink: 'https://bit.ly/3LoiWWB',
    buttonText: 'CONTACTAR',
  };

  return (
    <div className={SectionFiveStyle.sectionContainer}>
      <div
        id="sectionFive"
        className={SectionFiveStyle.sectionContent}
        style={{
          '--scale': scale,
        }}
      >
        <TextoSection
          imageUrl={SectionFiveData.imageUrl}
          altText={SectionFiveData.altText}
          title={SectionFiveData.title}
          description={SectionFiveData.description}
          buttonText={SectionFiveData.buttonText}
          buttonLink={SectionFiveData.buttonLink}
        />
      </div>
    </div>
  );
};

export default SectionFive;