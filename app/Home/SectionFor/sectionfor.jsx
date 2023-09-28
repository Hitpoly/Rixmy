'use client'

import React, { useEffect, useState } from 'react';
import SectionForStyle from './sectionForStyle.module.css';
import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionFor = () => {
  const [scale, setScale] = useState(0); // Inicialmente, el elemento está al 0% de escala

  useEffect(() => {
    const sectionFor = document.getElementById('sectionFor');

    const cargarObjeto = (entradas, observador) => {
      entradas.forEach((entrada) => {
        const intersectionRatio = entrada.intersectionRatio;
        const newScale = intersectionRatio >= 0.1 ? 1 : 0; // Escala al 100% cuando intersectionRatio es mayor o igual a 0.1
        setScale(newScale);
      });
    };

    const observador = new IntersectionObserver(cargarObjeto, {
      threshold: 0.1, // Umbral de 0.1
    });

    if (sectionFor) {
      observador.observe(sectionFor);
    }

    return () => {
      if (sectionFor) {
        observador.unobserve(sectionFor);
      }
    };
  }, []);

  const sectionForData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'TENDENCIA',
    description: {
      title: 'SERVICIOS DE INBOUND MARKETING EXPANDE TU EMPRESA.',
      text:
        'En la actualidad los clientes evolucionaron y ya saben cómo buscar en las plataformas digitales lo que desean sin mucho esfuerzo. Sin embargo, necesitan compañía durante el proceso de compra y estrategias de Inbound Marketing que puedan influir en la adquisición del producto.',
    },
    buttonText: 'CONOCE MÁS',
    buttonLink: '../Nosotros',
  };

  return (
    <div className={SectionForStyle.containerSectionFor}>
      <div className={SectionForStyle.contentFor}>
        <div
          id="sectionFor"
          className={SectionForStyle.textoSection}
          style={{
            transform: `scale(${scale})`, // Aplicar transformación de escala
            transition: 'transform 1s ease', // Agregar una transición suave
          }}
        >
          <TextoSection
            imageUrl={sectionForData.imageUrl}
            altText={sectionForData.altText}
            title={sectionForData.title}
            description={sectionForData.description}
            buttonText={sectionForData.buttonText}
            buttonLink={sectionForData.buttonLink}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFor;
