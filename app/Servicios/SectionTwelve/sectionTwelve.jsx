'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionTwelve = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'POSICIONA TU MARCA',
    description: {
      title: 'CONTENIDO DE VALOR SEO Y SEM.',
      text:
        'Estamos seguros que deseas estar en los primeros lugares de los buscadores más reconocidos en internet. Igualmente, te ayudamos a llegar al público de tu interés, ya que contamos con un equipo especializado en SEO y en campañas SEM.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/to_close_sales_with_your_buyer_persona_3.webp')",
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

export default SectionTwelve;
