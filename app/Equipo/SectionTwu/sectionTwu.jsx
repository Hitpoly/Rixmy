import React from 'react';
import styles from './sectionTwu.module.css';
import Image from 'next/image';

const SectionTwu = () => {
  return (
    <div className={styles.sectionContainer}>
        <div className={styles.memberContainer}>
          <div className={styles.imageContainer}>
            <Image src="./images/perfiles/denis.jpeg" alt="" className={styles.image} width={100} height={100}/>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.name}>Denis P. Olivares</p>
            <p className={styles.title}>Director ejecutivo.</p>
            <p className={styles.description}>
              Todo inicia con un sueño, hasta que se convierte en un propósito y con el pensamiento constante logra
              materializarse en esta extraordinaria realidad.
            </p>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div className={styles.imageContainer}>
            <img src="./images/perfiles/belgica.jpeg" alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.name}>Bélgica Gill</p>
            <p className={styles.title}>Directa Gráfica.</p>
            <p className={styles.description}>
              Todo hombre tiene la capacidad de crear, impulsar y potenciar el éxito de su propio destino.
            </p>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div className={styles.imageContainer}>
            <img src="./images/perfiles/eduardo.jpeg" alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.name}>Eduardo C. Ismael</p>
            <p className={styles.title}>Director de Talento Humano.</p>
            <p className={styles.description}>
              La utopía es el inicio de todo progreso y el diseño de un futuro mejor.
            </p>
          </div>
        </div>
      </div>
  );
};

export default SectionTwu;