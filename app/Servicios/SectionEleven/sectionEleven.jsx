'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionEleven = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'OTROS SERVICIOS',
    description: {
      title: 'DESARROLLO WEB.',
      text:
        'Para brindar una imagen profesional a tus clientes, necesitas un sitio web que se parezca a lo que deseas proyectar. Creamos páginas webs optimizadas, atractivas y que mejoren la experiencia del usuario.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/desarrolloWeb.jpg')",
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
          marginTop: '5%',
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

export default SectionEleven;
