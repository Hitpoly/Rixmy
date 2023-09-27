import SectionThreeStyle from './sectionForStyle.module.css';
import React from 'react';
import Image from 'next/image';

const SectionFor = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>NUEVOS RETOS NOS MOTÍVAN</span>
        </div>
        <h3>NUESTRA MISIÓN.</h3>
        <p>Potenciar las marcas de nuestros clientes en el
          mercado INTERNACIONAL Y NACIONAL, por medio de una estructura de
          comunicación sólida, responsable, fortalecida
          con nuestros servicios de Inbound Marketing y soluciones digitales.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <div>
          <p className={SectionThreeStyle.letrasubrayada}>Más de 22</p>
          <p>Expertos en nuestro staff</p>
          <p className={SectionThreeStyle.letrasubrayada}>Más de 15</p>
          <p>Servicios estratégicos para tu empresa</p>
        </div>
        <div>
          <p className={SectionThreeStyle.letrasubrayada} >Más de 10</p>
          <p>Áreas de marketing digital cubiertas </p>
          <p className={SectionThreeStyle.letrasubrayada}>1 método + 1 fórmula</p>
          <p>Le agregamos valor a tu empresa</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFor;
