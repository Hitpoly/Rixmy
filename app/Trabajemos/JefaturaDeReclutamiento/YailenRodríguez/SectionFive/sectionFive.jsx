
import React from 'react';
import Image from 'next/image';
import EduinaStyle from './sectionFive.module.css';

const handleButtonClick = () => {
  
}

const SectionFive = () => {

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
          <span>IMPULSA TU ÉXITO</span>
        </div>
        <h3>“ÚNETE A LA TRANSFORMACIÓN DIGITAL E IMPULSA TU ÉXITO” EL MOMENTO ES AHORA</h3>
        <p>Unete a RIXMY y vive ya expericia de ayudar mientras hacemos lo que mas nos gusta y ganando lo que siempre deseamos. Cada vez somos más!!</p>
      </div>
    </div>
  );
};

export default SectionFive;
