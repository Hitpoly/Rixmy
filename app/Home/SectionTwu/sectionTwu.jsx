'use client'

import SectionTwuStyle from './sectionTwuStyle.module.css'
import Slideshow from '../../components/LandingPage/SlideShow/slideShow.jsx';

const SectionTwu = () => {
  const slides = [
    {
      image: "./images/services.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: '¿QUÉ OFRECEMOS?',
          text: 'Nuestros servicios se adecúan a la actualidad y parten de los pilares fundamentales del Inbound Marketing. El objetivo de Rixmy es que tu empresa a través de estrategias inteligentes, tenga la capacidad de atraer, convertir, cerrar y deleitar a tus clientes.'
        },
    },
    
    {
      image: "./images/to_attract_your_buyer_persona.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'BRANDING DE MARCA',
          text: 'Hacemos que tu marca sea memorable, que tu público se conecte con tu identidad corporativa, con sus emociones y con tus diferentes líneas de productos o servicios. Logramos incorporar tu organización al estilo de vida de los clientes.'
        },
    },
    {
      image: "./images/to_attract_your_buyer_persona_2.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'SOCIAL MEDIA',
          text: 'Partimos de una estrategia dirigida a un público determinado y contamos con las herramientas idóneas pensada para cada plataforma social donde tu negocio se desenvuelva. Nuestro objetivo es idear la magia del nuevo mundo del marketing para conectar e incentivar acciones concretas de tu público que satisfagan los deseos de venta de nuestros clientes.'
        },
    },
    {
      image: "./images/to_attract_your_buyer_persona_3.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'DISEÑO AUDIOVISUAL',
          text: 'Desarrollamos productos audiovisuales originales, de calidad y con tecnología moderna. Creamos estrategias para conectar con tu público por medio de historias que los identifique, promocionamos tu negocio, superamos tus expectativas y nuestro mensaje se queda en la memoria de tu target. Te podemos ayudar a crear videos corporativos y spots publicitarios. '
        },
    },
    {
      image: "./images/to_attract_your_buyer_persona_4.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'PUBLICIDAD DIGITAL',
          text: 'Desarrollamos estrategias eficientes de inversión publicitaria digital que generen retorno positivo en nuestros clientes. El contenido orgánico genera valor, pero si deseas contar con mayor tráfico, seguidores y conversión necesitas invertir en publicidad digital.'
        },
    },
    {
      image: "./images/to_attract_your_buyer_persona_5.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'MARKETING DE INFLUENCERS',
          text: 'Es una estrategia que ayuda a generar ROI (retorno de la inversión) de forma considerable. Elegimos al representante de marca que más confianza pueda generar a tu público y proyecte una buena imagen, con la finalidad de persuadir a sus seguidores a favor de tu producto o empresa.'
        },
    },
    {
      image: "./images/to_convert_your_buyer_persona.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'EXPERIENCIA DE USUARIO UX/UI',
          text: 'Dejamos atrás los sistemas obsoletos para generar valor en el público que visita tu web. Empleamos diseño UX Y UI para ofrecer mayor claridad en el proceso de navegación. Además, empleamos estrategias de Inbound Marketing para que el contenido enganche al público, se logre más tráfico, conversiones y se conviertan en promotores de tu marca.'
        },
    },
    {
      image: "./images/to_close_sales_with_your_buyer_persona_4.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'CAMPAÑAS DE EMAIL MARKETING',
          text: 'Por medio del correo electrónico generamos contenido de valor para mantener el interés de tu público, consolidar relaciones de fidelización duraderas y generar más ganancias.'
        },
    },
    {
      image: "./images/to_close_sales_with_your_buyer_persona_2.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'AUTOMATIZACIÓN DE PROCESOS DE VENTA',
          text: 'Con las técnicas y herramientas de Inbound Marketing le garantizamos a nuestros clientes un proceso más automatizado y personalizado según sus prioridades.'
        },
    },
    {
      image: "./images/other_services_2.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'CONSULTORIA DE MARKETING',
          text: 'Te ayudamos a generar estrategias creativas y atractivas para tu cliente. Nos enfocamos en aquellas organizaciones que desean expandirse en el mercado internacional.'
        },
    },
    {
      image: "./images/capabilities_that_deliver.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'DESARROLLO WEB A MEDIDA',
          text: 'Para brindar una imagen profesional a tus clientes, necesitas un sitio web que se parezca a lo que deseas proyectar. Creamos páginas webs optimizadas, atractivas y que mejoren la experiencia del usuario.'
        },
    },
    {
      image: "./images/to_close_sales_with_your_buyer_persona_3.jpg",
      alt: "inbound marketing",
      link: "#",
      imageUrl: '/items/section_logo.svg',
      altText: 'logo-section',
      title: 'SERVICIOS',
      description: {
          title: 'CONTENIDO SEO Y SEM',
          text: 'Estamos seguros que deseas estar en los primeros lugares de los buscadores más reconocidos en internet. Igualmente, te ayudamos a llegar al público de tu interés, ya que contamos con un equipo especializado en SEO y en campañas SEM.'
        },
    },

  ];

  return (
      <div className={SectionTwuStyle.contenedorSlaidshow}>
          <Slideshow slides={slides} />
      </div>
  );
};

export default SectionTwu;

