'use client'

import React from 'react';
import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';
import styles from './sectionOne.module.css';

const SectionOne = () => {
  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'MÁS QUE UNA AGENCIA DE MARKETING',
    description: {
      title: 'SOMOS UNA RED QUE TE PERMITE CONCTAR CON TU PUBLICO.',
      text:
        'Nuestro equipo multidisciplinario de profesionales diseña estrategias y productos digitales personalizados para impulsar tu presencia en línea y alcanzar el éxito en el mundo digital.',
    },
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.contentWrapper}>
        <TextoSection
          imageUrl={sectionData.imageUrl}
          altText={sectionData.altText}
          title={sectionData.title}
          description={sectionData.description}
        />
      </div>
    </div>
  );
};

export default SectionOne;