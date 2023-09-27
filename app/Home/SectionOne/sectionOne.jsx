'use client'
import React, { useEffect, useState, useRef } from 'react';
import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';
import SectionOneStyle from './sectionOne.module.css';

const SectionOne = () => {
  const [opacity, setOpacity] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const cargarObjeto = (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          // Si el elemento está intersectando (entrando en la vista)
          setOpacity(1);
        } else {
          // Si el elemento no está intersectando (saliendo de la vista)
          setOpacity(0);
        }
      });
    };
  
    const observador = new IntersectionObserver(cargarObjeto, {
      threshold: [0, 1], // Observar cualquier cambio en la intersección (0 y 1)
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
    title: 'ESTRATÉGIA',
    description: {
      title: 'NOS ENFOCAMOS EN LAS OPORTUNIDADES DE CRECIMIENTO PARA TU EMPRESA',
      text:
        'En medio de una crisis global, nuestro equipo de profesionales a través de las estrategias de Inbound Marketing y la metodología de Rixmy posee las herramientas para superar tus expectativas.',
    },
    buttonText: 'CONOCER ESTRATEGIAS',
  };

  return (
    <div className={SectionOneStyle.contenedor}>
      <div className={SectionOneStyle.caja}></div>
      <div className={SectionOneStyle.content}>
        <div 
          ref={sectionRef}
          style={{
            opacity: 1,
            transform: `scale(${opacity >= 0.9 ? 1 : 0})`,
            transition: 'all 1s ease-in-out',
          }}
        >
        <TextoSection
          imageUrl={sectionData.imageUrl}
          altText={sectionData.altText}
          title={sectionData.title}
          description={sectionData.description}
          buttonText={sectionData.buttonText}
        />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;