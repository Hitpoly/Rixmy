import SectionForStyle from './sectionFor.module.css';
import React from 'react';
import Image from 'next/image';
import MiBoton from '../../../../components/LandingPage/Butoon/butoon';

const handleButtonClick = () => {
  
}

const SectionFor = () => {

  return (
    <div className={SectionForStyle.sectionThree}>
      <div className={SectionForStyle.content}>
        <div className={SectionForStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>NO HAY OTRA MARCA QUE APORTE MÁS</span>
        </div>
        <h3>TE DAMOS TODO LO QUE NECESITAS PARA QUE PUEDAS CRECER DENTRO DE RIXMY.</h3>
        <p>El objetivo principal de rixmy, es ayudar a que personas de todo el mundo puedan tener beneficios de por vida apalancándose de nosotros. Les capacitamos, acompañamos e impulsamos hasta que logren el éxito.</p>
      </div>
      <div className={SectionForStyle.metodo}>
        <p className={SectionForStyle.letrasubrayada}>Creemos tener la mejor remuneración a nivel Latinoamérica.</p>
        <p className={SectionForStyle.letrasubrayada}>Te preparamos y acompañamos en todo tu crecimiento.</p>
        <p className={SectionForStyle.letrasubrayada}>Te ayudamos hasta que puedas establecerte.</p>
        <p className={SectionForStyle.letrasubrayada}>Te damos todas las herramientas y material necesario.</p>
        <p className={SectionForStyle.letrasubrayada}>No somos MULTINIVEL aquí no tienes que PAGAR NADA, llegas a GANAR.</p>
        <div className={SectionForStyle.butoon} >
      <MiBoton href="https://forms.gle/g7vA3UUe1nM59EuE8" texto="AHORA SI QUIERO UNIRME!" onClick={handleButtonClick} />
      </div>
      </div>
    </div>
  );
};

export default SectionFor;
