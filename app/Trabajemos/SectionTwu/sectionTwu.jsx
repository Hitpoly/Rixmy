import SectionThreeStyle from './sectionTwu.module.css';
import React from 'react';

const SectionTwu = () => {

  return (
    <div className={SectionThreeStyle.sectionThree}>
      <div className={SectionThreeStyle.content}>
        <div className={SectionThreeStyle.logo}>
          <img src='/images/section_logo.svg' alt='logo' />
          <span>NOS ASOCIAMOS</span>
        </div>
        <h3>BUSCAMOS SOCIEDADES DE PRODUCCIÓN Y COMERCIO.</h3>
        <p>Nuestro objetivo es expandirnos rápidamente en Todo LATINOAMÉRICA, dando empleos y solucionando problemas de comunicación en Marcas y Empresas, con nuestros servicios de Inbound Marketing. Estamos dispuestos a ceder porcentajes(%) significativos de los ingresos por cliente, a cambio de cooperar en la producción de nuestros servicios, como en su comercio.</p>
      </div>
      <div className={SectionThreeStyle.metodo}>
        <div className={SectionThreeStyle.fila}>
          <p className={SectionThreeStyle.letrasubrayada}>PEQUEÑAS AGENCIAS DE MARKETING</p>
          <p>Pequeñas marcas que requieren ingresos y no tienen clientes.</p>
          <p className={SectionThreeStyle.letrasubrayada}>PROFESIONALES INDEPENDIENTES</p>
          <p>Profesionales que no tienen tiempo completo y buscan trabajar por proyecto.</p>
        </div>
        <div className={SectionThreeStyle.filaTwu}>
          <p className={SectionThreeStyle.letrasubrayada} >AGENCIAS DEDICADAS A CAPTAR CLIENTES</p>
          <p>Que buscan un producto ganador en el mercado internacional y obtener grandes beneficios por venta cerrada.</p>
          <p className={SectionThreeStyle.letrasubrayada}>VENDEDORES INDEPENDIENTES</p>
          <p>Estos profesionales son especialistas en ventas, han trabajado con empresas anteriormente y buscan grandes ganancias por venta cerrada.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwu;
