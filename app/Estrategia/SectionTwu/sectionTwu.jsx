import SectionThreeStyle from './sectionTwu.module.css';
import React from 'react';
import Image from 'next/image';

const SectionThree = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>PROFESIONALISMO</span>
        </div>
        <h3>CONTAMOS CON EL MEJOR TALENTO HUMANO.</h3>
        <p>Tenemos al personal más idóneo para cada área, quienes comparten su experiencia y se consolidan en un solo equipo en búsqueda de la excelencia en todo trabajo que se realice.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <p className={SectionThreeStyle.letrasubrayada}>Creamos estrategias atractivas.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Planificamos.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Ejecutamos y lideramos el proceso.</p>
      </div>
    </div>
  );
};

export default SectionThree;
