'use client'

import React, { useState, useEffect } from 'react';
import SectionStyle from './sectionVideo.module.css';
import Image from 'next/image';

const SectionVideo = () => {
  const [showText, setShowText] = useState(false); // Controla la visibilidad del título animado
  const [showParagraph, setShowParagraph] = useState(false); // Controla la visibilidad del párrafo animado
  const [showParagraphFadeOut, setShowParagraphFadeOut] = useState(false); // Controla la animación de desvanecimiento del párrafo
  const text = "AGENCIA DE MARKETING, ESPECIALIZADA EN INBOUND MARKETING."; // El texto a animar
  const [typedText, setTypedText] = useState(''); // El texto actualmente escrito

  // Función para iniciar la animación del título
  const startAnimation = () => {
    let currentLength = 0;
    let interval = setInterval(() => {
      if (currentLength === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowParagraphFadeOut(true);
          setTimeout(() => {
            setShowParagraph(false);
          }, 4000); // Agrega un retraso de 4 segundos antes de ocultar el párrafo
        }, 2000);
      } else {
        currentLength++;
        setTypedText(text.slice(0, currentLength));
        if (currentLength === text.length - 8) {
          setShowParagraph(true);
        }
      }
    }, 100);
  };

  // Función para iniciar la animación de desvanecimiento
  const startFadeOutAnimation = () => {
    let currentLength = text.length;
    let interval = setInterval(() => {
      if (currentLength === 0) {
        clearInterval(interval);
        setShowParagraphFadeOut(false);
        startAnimation();
      } else {
        currentLength--;
        setTypedText(text.slice(0, currentLength));
      }
    }, 100);
  };

  useEffect(() => {
    setShowText(true);
    startAnimation();
  }, []);

  useEffect(() => {
    if (showParagraphFadeOut) {
      startFadeOutAnimation();
    }
  }, [showParagraphFadeOut]);

  return (
    <div className={SectionStyle.containerSectionVideo}>
      <div className={SectionStyle.backgroundVideo} style={{ width: '100%', height: '100vh' }}>
        
        <div className={SectionStyle.sombra}></div>
      </div>
      {/* Contenido principal */}
      <div className={SectionStyle.content}>
        <div className={SectionStyle.sectionWrapper}>
          {/* Sección superior con logo y título */}
          <div className={SectionStyle.topSection}>
            <Image
              src='/images/section_logo.svg'
              width={100} height={100}
              alt='logo'
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className={SectionStyle.titleSpan}>NOSOTROS</span>
          </div>
          {/* Sección de texto principal */}
          <div className={SectionStyle.mainTextSection}>
            {/* Título animado */}
            {showText && (
              <h1 className={SectionStyle.mainTitle}>
              {typedText}
              </h1>
            )}
            {/* Párrafo animado */}
            {showParagraph && (
              <p className={SectionStyle.descriptionParagraph}>
                Conoce la mejor agencia especializada de inbound marketing del mercado latino americano.
              </p>
            )}
            {/* Enlace del botón */}
            <a className={SectionStyle.buttonLink} href="https://bit.ly/3LCSZ5X">
              CONTACTAR Y COTIZAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionVideo;