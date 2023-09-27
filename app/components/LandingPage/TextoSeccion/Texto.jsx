import React from 'react';
import styles from './textoSection.style.module.css';
import Image from 'next/image';

const TextoSection = ({ imageUrl, altText, title, description, buttonText }) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.topSection}>
        <Image 
          src={imageUrl} 
          alt={altText} 
          width={100} height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
        <span className={styles.titleSpan}>{title}</span>
      </div>
      <div className={styles.mainTextSection}>
        <div className={styles.mainTitle}>{description.title}</div>
        <p className={styles.descriptionParagraph}>{description.text}</p>
        {buttonText && (
          <a className={styles.buttonLink} href="/">{buttonText}</a>
        )}
      </div>
    </div>
  );
}

export default TextoSection;
