import SectionFiveStyle from './sectionFive.module.css';
import React from 'react';

const SectionFive = () => {

  return (
    <div className={SectionFiveStyle.sectionThree}>
      <div className={SectionFiveStyle.content}>
        <div className={SectionFiveStyle.logo}>
          <img src='/images/section_logo.svg' alt='logo' />
          <span>¿COMO SE BENFICIA TU EMPRESA?</span>
        </div>
        <h3>VENTAJAS AL CONTRATARNOS.</h3>
        <p>Somos garantía en tu crecimiento y ampliamos tus márgenes de optimización con la efectividad de nuestros procesos.</p>
      </div>
      <div className={SectionFiveStyle.metodo}>
        <div className={SectionFiveStyle.filauno}>
          <p className={SectionFiveStyle.letrasubrayada}>Investigamos el mercado</p>
          <p>Contamos con un equipo exclusivo para el estudio y análisis de mercado.</p>
          <p className={SectionFiveStyle.letrasubrayada}>Perfil de tu buyer persona</p>
          <p>Conocemos las características del buyer persona de nuestros clientes.</p>
          <p className={SectionFiveStyle.letrasubrayada}>Nos conectamos con tu target</p>
          <p>A través de nosotros estarás más conectado con tus clientes.</p>
        </div>
        <div className={SectionFiveStyle.filauno}>
          <p className={SectionFiveStyle.letrasubrayada} >Conocemos el mercado Internacional</p>
          <p>Países a los que llamamos hogar</p>
          <p className={SectionFiveStyle.letrasubrayada}>Aprovechamos las oportunidades</p>
          <p>Ayudamos a nuestros clientes a captar las oportunidades a través de nuestras herramientas tecnológicas y de marketing.</p>
          <p className={SectionFiveStyle.letrasubrayada}>Crecemos junto a ti!!</p>
          <p>Somo tu compañía en todo tu proceso de evolución.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
