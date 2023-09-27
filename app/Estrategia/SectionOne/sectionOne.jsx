'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionTWu = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: '¿COMO LO HACEMOS?',
    description: {
      title: 'POTENCIAMOS TU MARCA Y TU NEGOCIO.',
      text:
        'Gracias a las estrategias creadas por nuestro equipo de especialistas, logramos que obtengas una mayor rentabilidad, entorno a todo tu negocio.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/other_services.jpg')",
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

export default SectionTWu;
