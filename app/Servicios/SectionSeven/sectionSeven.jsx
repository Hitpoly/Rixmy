'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionSeven = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'PARA CONVERTIR A TU BUYER PERSONA',
    description: {
      title: 'EXPERIENCIA DE USUARIO (UI Y UX).',
      text:
        'Dejamos atrás los sistemas obsoletos para generar valor en el público que visita tu web. Empleamos diseño UI y UX para ofrecer mayor claridad en el proceso de navegación. Además, empleamos estrategias de Inbound Marketing para que el contenido enganche al público, se logre más tráfico, conversiones y se conviertan en promotores de tu marca.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/to_convert_your_buyer_persona.jpg')",
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
          marginTop: '5%',
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

export default SectionSeven;
