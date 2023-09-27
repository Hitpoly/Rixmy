'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionOne = () => {

  const sectionData = {
    description: {
      title: 'DIRECTORES EN RIXMY',
      text:
        'Si algo nos caracteriza, es la empatía con todos nuestros públicos para que sintiéndonos identificados podamos combatir cualquier inconveniente desde la raíz.',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/images/evolve_with_us.jpg')",
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
          description={sectionData.description}
        />
      </div>
    </div>
  );
};

export default SectionOne;
