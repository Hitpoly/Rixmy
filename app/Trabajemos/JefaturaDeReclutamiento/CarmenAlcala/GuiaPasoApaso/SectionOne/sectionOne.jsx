'use client'

import SectionThreeStyle from './sectionOne.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SectionOne = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>GUÍA PARA RECLUTADORES</span>
        </div>
        <h3>GUÍA PASO A PASO PARA EL RECLUTADOR EN RIXMY.</h3>
        <p>Colaborar en rixmy es un gran desafío, es por eso que solo nos acompañan los mejores. Partiendo de allí, te dejamos una guía paso a paso, para que puedas iniciar tu camino como reclutador y tener éxito con nosotros. Recuerda que siempre estamos a tu disposición para aclarar cualquiera de tus dudas. ¡Mucho Éxito!</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
      <Link href="./GuiaPasoApaso/InformacionImportante"><p className={SectionThreeStyle.letrasubrayada}>INFORMACIÓN IMPORTANTE</p></Link>
        <Link href="https://bit.ly/3M3d3ib"><p className={SectionThreeStyle.letrasubrayada}> SOLICÍTA TU MATERIAL</p></Link>
        <Link href="https://bit.ly/3QhHqDZ"><p className={SectionThreeStyle.letrasubrayada}>SOLICÍTA INSTRUCCIONES</p></Link>
        <Link href="https://bit.ly/45xtE4r"><p className={SectionThreeStyle.letrasubrayada}>COMUNIDAD DE WHATSAPP</p></Link>
        <Link href="https://bit.ly/400fYxz"><p className={SectionThreeStyle.letrasubrayada}>COMUNIDAD DE FACEBOOK</p></Link> 
      </div>
      <Link href="https://api.whatsapp.com/send?phone=584148211164" className={SectionThreeStyle.enlace}>
        <FontAwesomeIcon icon={faWhatsapp} className={SectionThreeStyle.iconowhatsapp}/>
    </Link>
    </div>
  );
};

export default SectionOne;
