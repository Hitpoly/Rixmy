
import SectionTwuStyle from './sectionFive.module.css';

const SectionFive = () => {

  return (
    <div className={SectionTwuStyle.containerSectionFor}>
      <div className={SectionTwuStyle.contentFor}>
        <div className={SectionTwuStyle.contenido}>
          <div className={SectionTwuStyle.contenidologo}>
            <img src='/images/section_logo.svg' alt='logo' />
            <p>PARA ATRAER A TU BUYER PERSONA</p>
            <h3>PUBLICIDAD DIGITAL.</h3>
            <div className={SectionTwuStyle.content}>
            <p>Desarrollamos estrategias eficientes de inversión publicitaria digital que generen retorno positivo en nuestros clientes.<br /><br />El contenido orgánico genera valor, pero si deseas contar con mayor tráfico, seguidores y conversión necesitas invertir en publicidad digital.</p>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
