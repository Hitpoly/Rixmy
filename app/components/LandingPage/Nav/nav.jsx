'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavStyle from './nav.module.css';
import { FaHome, FaUser, FaCog, FaBriefcase, FaBars, FaChartLine, FaUsers, FaBlog, FaHandshake, FaFlag } from 'react-icons/fa';

var Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Controlador de clic global para cerrar el menú cuando se hace clic fuera de él
  const handleGlobalClick = (event) => {
    if (showMenu && (!menuRef.current || !menuRef.current.contains(event.target))) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    // Agregar el controlador de clic global cuando el componente se monta
    document.addEventListener('click', handleGlobalClick);

    // Limpiar el controlador de clic global cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [showMenu]);

  return (
    <ul className={NavStyle.containerNav}>
      <li className={NavStyle.containerLogo}>
        <Link href="/">
          <Image src="/images/rixmy_logo.png" alt="Logo" width={400} height={300} />
        </Link>
      </li>
      <li className={NavStyle.login}>
        <FaUser className={NavStyle.iconLogin} />
      </li>
      <li className={NavStyle.liiconidioma}>
        <FaFlag className={NavStyle.iconIdioma} />
      </li>

      <li>
        <FaBars
          className={NavStyle.iconMenu}
          onClick={toggleMenu}
        />
      </li>
      {showMenu && (
        <li className={NavStyle.submenu} ref={menuRef}>
          <FaHome className={NavStyle.submenuIconHome} />
          <ul>
            <li>
              <FaHome className={NavStyle.submenuIcon} />
              <Link href="/">INICIO</Link>
            </li>
            <li>
              <FaUser className={NavStyle.submenuIcon} />
              <Link href="./Nosotros">NOSOTROS</Link>
            </li>
            <li>
              <FaChartLine className={NavStyle.submenuIcon} />
              <Link href="./QueHacemos">¿QUE HACEMOS?</Link>
            </li>
            <li>
              <FaCog className={NavStyle.submenuIcon} />
              <Link href="./Estrategia">ESTRATÉGIA</Link>
            </li>
            <li>
              <FaBriefcase className={NavStyle.submenuIcon} />
              <Link href="./Servicios">SERVICIOS</Link>
            </li>
            <li>
              <FaUsers className={NavStyle.submenuIcon} />
              <Link href="./Equipo">EQUIPO</Link>
            </li>
            <li>
              <FaBlog className={NavStyle.submenuIcon} />
              <Link href="/">BLOG</Link>
            </li>
            <li>
              <FaHandshake className={NavStyle.submenuIcon} />
              <Link href="./Trabajemos">OPORTUNIDADES</Link>
            </li>
          </ul>
        </li>
      )}
      <li className={NavStyle.contactanos}>
        <a href="https://bit.ly/3LoiWWB" target="_blank" rel="noopener noreferrer">
          CONTÁCTANOS
        </a>
      </li>
    </ul>
  );
};

export default Nav;
