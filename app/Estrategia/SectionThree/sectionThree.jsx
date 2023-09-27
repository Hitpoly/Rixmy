import SectionThreeStyle from './sectionThree.module.css';
import React from 'react';
import Image from 'next/image';

const SectionFor = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>SOMOS INTEGRALES</span>
        </div>
        <h3>TE AYUDAMOS DE 0 A 100 DE FORMA ESCALONADA</h3>
        <p>Auditamos cada uno de los procesos internos de tu marca o empresa, los analizamos y tomamos desiciones de mejora concientes, con el unico objetivo de aumentar la rentabilidad final.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <div className={SectionThreeStyle.fila}>
          <p className={SectionThreeStyle.letrasubrayada}>MARCA</p>
          <p>Sin una marca autentica, no hay marketing que funcione.</p>
          <p className={SectionThreeStyle.letrasubrayada}>MARKETING DIGITAL</p>
          <p>Sin buenos procesos estratégicos de Marketing, jamás habra un negocio sostenible.</p>
        </div>
        <div className={SectionThreeStyle.filaTwu}>
          <p className={SectionThreeStyle.letrasubrayada} >VENTAS</p>
          <p>Los metodos convencionales, quedaron obsoletos, aportamos valor al consumidor.</p>
          <p className={SectionThreeStyle.letrasubrayada}>SERVICIO AL CLIENTE</p>
          <p>Nada sirve si el cliente queda en el olvido, no solo lo acompañamos 'LO DELEITAMOS CON TU GAMA DE PRODUCTOS O SERVICIOS'</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFor;
