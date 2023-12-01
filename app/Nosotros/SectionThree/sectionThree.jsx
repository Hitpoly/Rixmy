import SectionThreeStyle from './sectionThreeStyle.module.css';
import React from 'react';
import Image from 'next/image';

const SectionThree = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <p>EN TIEMPO DE CRISIS</p>
        </div>
        <h3>TE DAMOS LA OPORTUNIDAD DE AVANZAR.</h3>
        <p>En un mercado tan convulsionado aprendimos a mejorar estrategias y técnicas de marketing para convertirnos en la solución que necesita tu empresa.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <p className={SectionThreeStyle.letrasubrayada}>Metodología Inbound Marketing</p>
        <p className={SectionThreeStyle.letrasubrayada}>Formula de Rixmy</p>
        <p className={SectionThreeStyle.letrasubrayada}>Automatizamos los procesos</p>
      </div>
    </div>
  );
};

export default SectionThree;
