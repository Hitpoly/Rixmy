'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionOne = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'NUESTROS SERVICIOS',
    description: {
      title: 'RESPALDADO POR LA METODOLOGÍA INBOUND MARKETING.',
      text:
        'Con este tipo de procedimiento obtendrás mayor engagement con tu audiencia, aumentarás el tráfico en tus diferentes plataformas, lograrás leads cualificados, transmitirás confianza, demostrarás seguridad, generarás una comunidad de clientes fieles a tu marca y todas estas ventajas se transforman en un mayor número de ventas.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/services.webp')",
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

export default SectionOne;
