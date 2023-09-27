import SectionFiveStyle from './sectionEight.module.css';
import React from 'react';
import Image from 'next/image';

const SectionEight = () => {

  return (
    <div className={SectionFiveStyle.sectionThree}>
      <div className={SectionFiveStyle.content}>
        <div className={SectionFiveStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>PARA CERRAR LAS VENTAS CON TU BUYER PERSONA</span>
        </div>
        <h3>CAMPAÑAS DE MAIL MARKETING.</h3>
        <p>Por medio del correo electrónico generamos contenido de valor para mantener el interés de tu público, consolidar relaciones de fidelización duraderas y generar más ganancias.</p>
      </div>
    </div>
  );
};

export default SectionEight;
