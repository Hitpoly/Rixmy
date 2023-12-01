'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionTWu = () => {

  const sectionData = {
    imageUrl: '/images/section_logo.svg',
    altText: 'logo-section',
    title: 'MÁS QUE UNA SIMPLE AGENCIA',
    description: {
      title: 'QUEREMOS SER TUS ALIADOS ESTRATEGICOS, DE POR VIDA.',
      text:
        '¡Al ayudarte a crecer de forma escalona, Nosotros también crecemos!. Tus referencias, recomendaciones y buenos comentarios, aportan mucho valor a nuestros objetivos de expansión. Por eso nos acoplamos de forma estratégica a la inversión disponible sobre la mesa y te acompañamos desde los pequeños hasta los increíblemente grandes RESULTADOS.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/our_work.jpg')",
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
