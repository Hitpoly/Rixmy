
import React from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import EduinaStyle from './sectionOne.module.css';
import MiBoton from '../../../../../../components/LandingPage/Butoon/butoon';

const handleButtonClick = () => {
  
}

const SectionOne = () => {

  const videoUrl = 'https://youtu.be/WFh4F9WGW-8';

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
        <h3>EVITA COMPARTIR INFORMACIÓN FRAUDULENTA, PARA NO SER ELIMINADO DE LA COMUNIDAD</h3>
        <p>En este video descubrirás la forma correcta en la que debes comunicar el mensaje de oportunidad que RIXMY tiene para Agentes Comerciales. Aprovecha este contenido para evitar divulgar información fraudulenta y evita ser eliminado de la comunidad.</p>
      </div>
      <div className={EduinaStyle.containerVideo}>
      <div className={EduinaStyle.video}>
      <YouTube videoId={videoId} opts={opts} className={EduinaStyle.youtubeVideo} />
      <MiBoton href="https://forms.gle/PPyoicLgZB2FTtTi6" texto="RESPONDE ESTA ENCUENTA" onClick={handleButtonClick} />
      </div>
      </div>
    </div>
  );
};

export default SectionOne;
