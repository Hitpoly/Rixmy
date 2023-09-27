import SectionFiveStyle from './sectionThree.module.css';
import React from 'react';
import Image from 'next/image';

const SectionThree = () => {

  return (
    <div className={SectionFiveStyle.sectionThree}>
      <div className={SectionFiveStyle.content}>
        <div className={SectionFiveStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>PARA ATRAER A TU BUYER PERSONA</span>
        </div>
        <h3>SOCIAL MEDIA.</h3>
        <p>Partimos de una estrategia dirigida a un público determinado y contamos con las herramientas idóneas pensada para cada plataforma social donde tu negocio se desenvuelva.<br/><br/>Nuestro objetivo es idear la magia del nuevo mundo del marketing para conectar e incentivar acciones concretas de tu público que satisfagan los deseos de venta de nuestros clientes.</p>
      </div>
    </div>
  );
};

export default SectionThree;
