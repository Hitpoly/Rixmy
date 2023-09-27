'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionThree = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'COLABORAMOS A LA ECONOMIA GLOBAL',
    description: {
      title: 'NUESTROS SISTEMAS LLEVAN MILES DE EMPLEOS AL REDEDOR DEL MUNDO.',
      text:
        'Este nuevo mundo industrial se ha sumergido cada vez más en un ecosistema llamado internet, el cual aporta muchos beneficios a la civilización actual, NO solo a las  empresas, SI NO tambien a profesionales de todo el mundo. Estamos comprometidos a educar y guiar a todos los colaboradores, QUE QUIERAN SUMARSE, para que JUNTOS llevemos soluciones empresariales de comunicación a EMPRESAS a nivel GLOBAL.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/work_with_us.jpg')",
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

export default SectionThree;
