
import React from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import EduinaStyle from './sectionTwo.module.css';
import MiBoton from '../../../../components/LandingPage/Butoon/butoon';

const handleButtonClick = () => {
  
}

const SectionTwo = () => {

  const videoUrl = 'https://youtu.be/m58jqSOLAeU';

  const getVideoId = (url) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match && match[1];
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return;
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
    autoplay: 1,
    },
  };

  return (
    <div className={EduinaStyle.sectionTwoContainer}>
      <div className={EduinaStyle.content}>
        <div className={EduinaStyle.logo}>
          <Image src='/images/section_logo.svg' alt='logo' width={100} height={100}/>
          <span>SISTEMA DE
RECLUTADORES</span>
        </div>
        <h3>¿QUIERES GANAR DINERO DE MANERA
SENCILLA Y SIN MUCHO ESFUERZO?</h3>
        <p>Únete a nuestro equipo de reclutadores y gana
grandes comisiones simplemente por traer a
los mejores vendedores a nuestra cadena de
comercio.</p>
      </div>
      <div className={EduinaStyle.containerVideo}>
      <div className={EduinaStyle.video}>
      <YouTube videoId={videoId} opts={opts} className={EduinaStyle.youtubeVideo} />
      <MiBoton href="https://www.ejemplo.com" texto="QUIERO UNIRME!" onClick={handleButtonClick} />
      </div>
      </div>
    </div>
  );
};

export default SectionTwo;
