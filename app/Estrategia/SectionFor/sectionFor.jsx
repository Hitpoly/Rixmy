import SectionThreeStyle from './sectionFor.module.css';
import React from 'react';
import Image from 'next/image';

const SectionFor = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>TENEMOS LOS PIES SOBRE LA TIERRA</span>
        </div>
        <h3>PRIMERO ASESORAMOS Y DESPUES NEGOCIAMOS.</h3>
        <p>Ponemos a tu disposición a aun equipo capacitado y calificado de profesionales, para asesorarte en cualquier parte del proceso y guiarte a tomar la mejor desición, no basada en ideas ni en sueños, si no mas bien, basadas en datos reales y adecuandolos a tu situacion actual.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <p className={SectionThreeStyle.letrasubrayada}>Te asesoramos en el proceso.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Creamos el plan estrategico anual.</p>
        <p className={SectionThreeStyle.letrasubrayada}>Elijes el mejor camino para crecer.</p>
      </div>
    </div>
  );
};

export default SectionFor;
