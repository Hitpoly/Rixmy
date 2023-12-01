'use client'

import TextoSection from '../../components/LandingPage/TextoSeccion/Texto';

const SectionOne = () => {

  const sectionData = {
    description: {
      title: 'EL NUEVO MUNDO DEL INBOUND MARKETING',
      text:
        'Un mundo nuevo donde el cosumidor, el contenido y la tecnología toman el control',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '50vh',
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
