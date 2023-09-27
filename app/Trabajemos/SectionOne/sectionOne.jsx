import SectionThreeStyle from './sectionOne.module.css';
import React from 'react';

const SectionOne = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <img src='/images/section_logo.svg' alt='logo' />
          <span>TRABAJÁMOS EN TODO LATINOAMERICA</span>
        </div>
        <h3>ESTAMOS EN BUSQUEDA DEL MEJOR TALENTO HUMANO.</h3>
        <p>Uno de nuestros diferenciadores principales, es el contar con profesionales de alto nivel, vanguardistas del mercado internacional. Rixmy se dispone a capacitarlos para sacar el máximo potencial de sus capacidades y crecer juntos.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <p className={SectionThreeStyle.letrasubrayada}>Profesionales de tráfico digital.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Profesionales de gestión de cuentas.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Profesionales en diseño Multimedia.</p>
      </div>
    </div>
  );
};

export default SectionOne;
