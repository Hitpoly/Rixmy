import React from 'react';
import styles from './textoSection.style.module.css';

const TextoSection = ({ imageUrl, altText, title, description, buttonText }) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.topSection}>
        <img 
          src={imageUrl} 
          alt={altText} 
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
