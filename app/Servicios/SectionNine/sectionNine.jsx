'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionNine = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'PARA CERRAR LAS VENTAS CON TU BUYER PERSONA',
    description: {
      title: 'AUTOMATIZACION DE PROCESOS DE VENTA.',
      text:
        'Con las técnicas y herramientas de Inbound Marketing le garantizamos a nuestros clientes un proceso más automatizado y personalizado según sus prioridades.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/to_close_sales_with_your_buyer_persona_2.webp')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '90%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'Montserrat, sans-serif',
          color: 'white',
          marginLeft: '1.5%',
        }}
      >
        <TextoSection
          imageUrl={sectionData.imageUrl}
          altText={sectionData.altText}
          title={sectionData.title}
          description={sectionData.description}
        />
      </div>
    </div>
  );
};

export default SectionNine;
