import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importa los iconos de Font Awesome

import FooterStyle from './footerStyle.module.css';

const Footer = () => {
    return (
        <div className={FooterStyle.contentFooter}>
            <div className={FooterStyle.logoConact}>
                <img src="/images/vectorRrixmyBlanco.png" alt='Logo-Footer' width={217} height={80} />
                <p>
                <a href="https://www.bing.com/maps?q=lima+per%C3%BA+mapa&FORM=HDRSC6&cp=-12.05997%7E-77.037475&lvl=13.8"> Lima - Perú</a> /  
                    <a href="mailto:agencia@rixmy.com"> agencia@rixmy.com</a> / 
                    <a href="https://bit.ly/3LoiWWB"> +51 933961352</a>
                </p>
            </div>
            <div className={FooterStyle.listas}>
                <ul className={FooterStyle.iconos}>
                    <li>
                        <a href="https://www.facebook.com/RixmyMarketing" target={'_blank'} rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={{ width: 25, height: 25 }} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@rixmy693">
                            <FontAwesomeIcon icon={faYoutube} style={{ width: 25, height: 25 }} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/rixmyagencia/" target={'_blank'} rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ width: 25, height: 25 }} /> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/rixmy/mycompany/?viewAsMember=true" target={'_blank'} rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ width: 25, height: 25 }} /> 
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">COOKIES POLICY</a>
                    </li>
                    
                    <li>
                        <a href="#">TERMS AND CONDITIONS</a>
                    </li>
                    
                    <li>
                        <a href="#">PRIVACY POLICY</a>
                    </li>
                    
                    <li>
                        <a href="#">INTEREST ADVERTISING NOTICE</a>
                    </li>
                </ul>
                <p>© 2022 Rixmy. Todos los Derechos RESERVADOS</p>
            </div>
        </div>
    )
}

export default Footer;
