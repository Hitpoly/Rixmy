import SectionThreeStyle from './sectionOne.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SectionOne = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>GUÍA PARA RECLUTADORES</span>
        </div>
        <h3>GUÍA PASO A PASO PARA EL RECLUTADOR EN RIXMY.</h3>
        <p>Colaborar en rixmy es un gran desafío, es por eso que solo están los mejores colaborando con nosostros. Partiendo de allí, te dejamos una guía paso a paso, para que puedas iniciar tu camino como reclutador y tener éxito con nosotros. Recuerda que siempre estamos a tu disposición para aclarar cualquiera de tus dudas. ¡Mucho Éxito!</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
      <Link href="./GuiaPasoApaso/InformacionImportante"><p className={SectionThreeStyle.letrasubrayada}>#1. Información Importante.</p></Link>
        <Link href="https://bit.ly/3QjdLKr"><p className={SectionThreeStyle.letrasubrayada}>#2. Solicita tu material.</p></Link>
        <Link href="https://bit.ly/46MIaWU"><p className={SectionThreeStyle.letrasubrayada}>#3. Solicita una reunión, para recibir instrucciones.</p></Link>
        <Link href="https://bit.ly/405uRyY"><p className={SectionThreeStyle.letrasubrayada}>#4. Únete a la comunidad de Whatsapp.</p></Link>
        <Link href="https://bit.ly/3rYSRHa"><p className={SectionThreeStyle.letrasubrayada}>#5. Únete a la comunidad de Facebook.</p></Link> 
      </div>
    </div>
  );
};

export default SectionOne;
