'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionTWu = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'PARA ATRAER A TU BUYER PERSONA',
    description: {
      title: 'BRANDING.',
      text:
        'Hacemos que tu marca sea memorable, que tu público se conecte con tu identidad corporativa, con sus emociones y con tus diferentes líneas de productos o servicios. Logramos incorporar a tu organización al estilo de vida de los clientes.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/to_attract_your_buyer_persona.webp')",
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
          marginTop: '5.5%',
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

export default SectionTWu;
