import SectionThreeStyle from './sectionOne.module.css';
import React from 'react';
import Image from 'next/image';

const SectionOne = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>TRABAJAMOS EN TODO LATINOAMERICA</span>
        </div>
        <h3>ESTAMOS EN BÚSQUEDA DE RECLUTADORES DE TALENTO HUMANO.</h3>
        <p>Uno de nuestros diferenciadores principales, es el contar con profesionales de alto nivel, vanguardistas del mercado internacional. Rixmy se dispone a capacitarlos para sacar el máximo potencial de sus capacidades y crecer juntos.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <p className={SectionThreeStyle.letrasubrayada}>Con conocimientos previos en el área de marketing o ventas.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Decididos y perseverantes.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Con una actitud positiva y proactiva.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Con muchas ganas de ganar dinero.</p>
      </div>
    </div>
  );
};

export default SectionOne;
