'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionFor = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'PARA ATRAER A TU BUYER PERSONA',
    description: {
      title: 'DISEÑO AUDIOVISUAL.',
      text:
        'Desarrollamos productos audiovisuales originales, de calidad y con tecnología moderna. Creamos estrategias para conectar con tu público por medio de historias que los identifiquen, promocionamos tu negocio, superamos tus expectativas y nuestro mensaje se queda en la memoria de tu target.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/to_attract_your_buyer_persona_3.webp')",
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

export default SectionFor;
