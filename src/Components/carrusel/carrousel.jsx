import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const images = [
    {
      src: '/images/C_imagen1.png',
      title: 'Materiales que impulsan tus proyectos',
      description: 'En Comercializadora Garza, ofrecemos una amplia variedad de materiales esenciales para la construcción, urbanización y remodelación. Desde tuberías y conexiones hidráulicas hasta cables eléctricos y accesorios para acabados, contamos con todo lo necesario para hacer de tu proyecto un éxito.',
    },
    {
      src: '/images/C_imagen0.jpg',
      title: ' Suministro eficiente',
      description: 'El tiempo es clave en cualquier obra, y en Comercializadora Garza lo entendemos. Nuestro compromiso es ofrecer un suministro puntual y eficiente, optimizando tiempos de entrega y reduciendo costos. Con nuestro equipo de expertos, brindamos asesoría personalizada para que tu proyecto avance sin contratiempos.',
    },
    {
      src: '/images/C_imagen2.png',
      title: 'Climatización confiable con Mirage',
      description: 'En Comercializadora Garza, somos distribuidores de la marca Mirage, líder en sistemas de aire acondicionado y climatización. Ofrecemos equipos de alta eficiencia que garantizan confort y ahorro energético para todo tipo de espacios, desde hogares hasta proyectos comerciales e industriales.',
    },
    {
      src: '/images/C_imagen3.png',
      title: 'Urbanización efectiva',
      description: 'Sabemos que los costos y los plazos de entrega son los factores que determinan un servicio satisfactorio. Por esa razón, desde Comercializadora de Productos Sustentables Garza, se cuidan mucho estos detalles, estableciendo una comunicación sincera y cercana entre nuestros técnicos y sus responsables de Compras y de Construcción.',
    },
  ];

  // Cambiar de imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Ocultar texto antes de cambiar la imagen
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); // Esperar 0.5 segundos antes de cambiar la imagen
    }, 5000); // Cambiar de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // Mostrar el texto después de que la imagen llegue a su posición final
  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 500); // Esperar 1 segundo para mostrar el texto

    return () => clearTimeout(textTimeout);
  }, [currentIndex]);

  // Navegación manual
  const goToPrevious = () => {
    setShowText(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, 1000);
  };

  const goToNext = () => {
    setShowText(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);
  };

  return (
    <div className="carousel">
      {/* Imágenes */}
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? 'active' : ''
            } ${index === (currentIndex + 1) % images.length ? 'next' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          ></div>
        ))}
      </div>

      {/* Recuadro de texto */}
      <div className={`carousel-text ${showText ? 'show' : ''}`}>
        <h2>{images[currentIndex].title}</h2>
        <p>{images[currentIndex].description}</p>
      </div>

      {/* Botón en el lado derecho */}
      <div className="carousel-right-button">
       <a href='/contacto'> <button className="carousel-button">Quiero realizar <br/>una cotización</button></a>
      </div>

      {/* Controles de navegación (solo en web) */}
      <div className="carousel-controls">
        <button onClick={goToPrevious}>&lt;</button>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => {
                setShowText(false);
                setTimeout(() => setCurrentIndex(index), 500);
              }}
            ></span>
          ))}
        </div>
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;