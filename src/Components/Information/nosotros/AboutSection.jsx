import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Título principal */}
        <h2 className="about-title">Comercializadora Garza</h2>

        {/* Descripción breve */}
        <p className="about-description">
          En Comercializadora Garza, nos dedicamos a ofrecer soluciones innovadoras y sustentables
          para la construcción y el desarrollo urbano. Con más de una década de experiencia, somos
          líderes en la comercialización de productos ecotecnológicos que promueven el ahorro de
          energía, agua y recursos, contribuyendo a un futuro más verde y sostenible.
        </p>

        {/* Imágenes de referencia */}
        <div className="about-images">
          <img
            src="/images/abautimages01.png" // Ruta de la imagen 1
            alt="Innovación en construcción"
            className="about-image"
          />
          <img
            src="/images/abautimages02.png" // Ruta de la imagen 2
            alt="Soluciones sustentables"
            className="about-image"
          />
          <img
            src="/images/abautimages03.png" // Ruta de la imagen 3
            alt="Compromiso con el medio ambiente"
            className="about-image"
          />
        </div>

        {/* Iconos o estadísticas (opcional) */}
        <div className="about-stats">
          <div className="stat-item">
            <h3>+17 años</h3>
            <p>de experiencia en el mercado</p>
          </div>
          <div className="stat-item">
            <h3>+500 proyectos</h3>
            <p>completados con éxito</p>
          </div>
          <div className="stat-item">
            <h3>100% comprometidos</h3>
            <p>con la calidad de nuestros productos</p>
          </div>
        </div>

        {/* Llamado a la acción */}
        <a href="#contacto" className="about-cta">
          Conoce más sobre nosotros
        </a>
      </div>
    </section>
  );
};

export default AboutSection;