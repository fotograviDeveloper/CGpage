import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al cambiar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/logocg.png" alt="Logo Comercializadora Garza" />
      </div>

      {/* Menú de escritorio */}
      <div className="navbar-desktop">
        <ul className="navbar-links">
          <li><a href="/inicio">Inicio</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
        <div className="navbar-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://wa.me/tunumerodetelefono" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </a>
        </div>
      </div>

      {/* Icono de menú hamburguesa (solo móvil) */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>

      {/* Menú desplegable móvil */}
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          {/* Secciones */}
          <ul className="navbar-links">
            <li><a href="/inicio" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="/servicios" onClick={toggleMenu}>Servicios</a></li>
            <li><a href="/nosotros" onClick={toggleMenu}>Nosotros</a></li>
            <li><a href="/contacto" onClick={toggleMenu}>Contacto</a></li>
          </ul>

          {/* Redes sociales */}
          <div className="navbar-social">
            <a href="https://www.facebook.com/comercializadora.garzamty" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://wa.me/tunumerodetelefono" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.instagram.com/comercializadora_garza/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.tiktok.com/@comercializadora_garza" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://maps.app.goo.gl/iMWWjEtFMWaT1PjC8" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
