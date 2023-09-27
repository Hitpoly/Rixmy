import SectionFiveStyle from './sectionThree.module.css';
import React from 'react';

const SectionThree = () => {

  return (
    <div className={SectionFiveStyle.sectionThree}>
      <div className={SectionFiveStyle.content}>
        <div className={SectionFiveStyle.logo}>
          <img src='/images/section_logo.svg' alt='logo' />
          <span>PARA ATRAER A TU BUYER PERSONA</span>
        </div>
        <h3>SOCIAL MEDIA.</h3>
        <p>Partimos de una estrategia dirigida a un público determinado y contamos con las herramientas idóneas pensada para cada plataforma social donde tu negocio se desenvuelva.<br/><br/>Nuestro objetivo es idear la magia del nuevo mundo del marketing para conectar e incentivar acciones concretas de tu público que satisfagan los deseos de venta de nuestros clientes.</p>
      </div>
    </div>
  );
};

export default SectionThree;
