'user client'

import React, { useRef, useEffect } from "react";
import ArrowLeft from "../../Icons/ArrowLeft/Left.jsx";
import ArrowRight from "../../Icons/ArrowRight/Right.jsx";
import styles from "./SlideshowStyle.module.css";
import TextoSection from "../TextoSeccion/Texto.jsx";
import Image from 'next/image';

const Slideshow = ({ slides }) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = () => {
    if (slideshow.current && slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];

      slideshow.current.style.transition = `500ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (slideshow.current && slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `500ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 6000);

    if (slideshow.current) {
      slideshow.current.addEventListener("mouseenter", () => {
        clearInterval(intervaloSlideshow.current);
      });

      slideshow.current.addEventListener("mouseleave", () => {
        intervaloSlideshow.current = setInterval(() => {
          siguiente();
        }, 6000);
      });
    }
  }, []);

  return (
    <div className={styles.contenedorPrincipal}>
      <div ref={slideshow} className={styles.contenedorSlideShow}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <a href={slide.link}>
              <Image src={slide.image} alt={slide.alt} width={80} height={80}/>
            </a>
            <div className={styles.textoSlide}>
              <TextoSection
                imageUrl={slide.imageUrl}
                altText={slide.alt}
                title={slide.title}
                description={slide.description}
                buttonText="CONOCER SERVICIO"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.controles}>
        <button className={styles.boton} onClick={anterior}>
          <ArrowLeft />
        </button>
        <button className={`${styles.boton} ${styles.derecho}`} onClick={siguiente}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
