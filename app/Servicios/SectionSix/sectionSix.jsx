'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionSix = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'PARA ATRAER A TU BUYER PERSONA',
    description: {
      title: 'MARKETING DE INFLUENCERS.',
      text:
        'Es una estrategia que ayuda a generar ROI (retorno de la inversión) de forma considerable. Elegimos al representante de marca que más confianza pueda generar a tu público y proyecte una buena imagen, con la finalidad de persuadir a sus seguidores a favor de tu producto o empresa.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/to_attract_your_buyer_persona_5.jpg')",
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

export default SectionSix;
