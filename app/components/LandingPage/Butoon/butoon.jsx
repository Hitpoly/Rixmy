import React from 'react';
import Link from 'next/link';

const MiBoton = ({ href, texto, onClick }) => {
  const handleLinkClick = () => {
    console.log('Enlace clickeado');
    // Puedes realizar acciones adicionales al hacer clic en el enlace
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} onClick={handleLinkClick} style={{ textDecoration: 'none', margin:'1px',marginTop:'5px', display: 'inline-block', padding: '10px 20px', width: '100%', backgroundColor: '#E03138', color: '#fff', borderRadius: '5px', cursor: 'pointer', textAlign:'center',}}>
      {texto}
    </Link>
  );
};

export default MiBoton;
