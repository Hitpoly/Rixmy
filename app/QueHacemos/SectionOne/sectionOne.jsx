'use client'

import React from 'react';
import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';
import styles from './sectionOne.module.css';

const SectionOne = () => {
  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: '¿QUE HACEMOS?',
    description: {
      title: 'AYUDAMOS A ESTABLECER RELACIONES DURADERAS, ENTRE MARCA Y PERSONA.',
      text:
        'No solo ayudamos a aumentar el volumen de ventas, si no que más bien nuestro enfoque es lograr que ese volumen de ventas permanezca haciendo recompras, UNA Y OTRA VEZ, A LO LARGO DEL TIEMPO.',
    },
  };

  return (
    <div className={styles.backgroundImage}>
      <div className={styles.container}></div>
      <div className={styles.content}>
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