
import React from 'react';
import Image from 'next/image';
import EduinaStyle from './sectionTree.module.css';

const SectionTree = () => {


  return (
    <div className={EduinaStyle.sectionTwoContainer}>
      <div className={EduinaStyle.content}>
      <div className={EduinaStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>NUESTRO TALENTO IDEAL</span>
        </div>
        <h3>¿QUE NECESITAS PARA TRABAJAR CON NOSOTROS?</h3>
        <p>Perseverancia, entusiasmo y mucha dedicación es lo principal y lo demás solo es proceso. Buscamos a personas comprometidas con una visión a largo plazo, esta no es una oportunidad para personas conformistas, buscamos avanzar.</p>
      </div>
      <div className={EduinaStyle.metodo}>
        <p className={EduinaStyle.letrasubrayada}>Computadora, tablet o celular.</p>
        <p className={EduinaStyle.letrasubrayada}>No se exige horario, cada quien avanza según lo que quiera ganar.</p>
        <p className={EduinaStyle.letrasubrayada}>Capaces de atraer y supervisar equipos comerciales.</p>
        <p className={EduinaStyle.letrasubrayada}>Conscientes de que el marketing y la tecnología son el futuro de las empresas y del mundo.</p>
      </div>
    </div>
  );
};

export default SectionTree;
