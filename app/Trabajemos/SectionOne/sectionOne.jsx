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
        <h3>ESTAMOS EN BÚSQUEDA DEL MEJOR TALENTO HUMANO.</h3>
        <p>Uno de nuestros diferenciadores principales, es el contar con profesionales de alto nivel, vanguardistas del mercado internacional. Rixmy se dispone a capacitarlos para sacar el máximo potencial de sus capacidades y crecer juntos.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <p className={SectionThreeStyle.letrasubrayada}>Profesionales de tráfico digital.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Profesionales de gestión de cuentas.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Profesionales en diseño multimedia.</p>
      </div>
    </div>
  );
};

export default SectionOne;
