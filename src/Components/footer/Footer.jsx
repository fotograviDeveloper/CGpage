import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Información de contacto */}
        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-list">
            <li>
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <span>Teléfono: +52 81 1234 5678</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <span>Email: info@comercializadoragarza.com</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
              <span>Dirección: Av. Garza S/N, Monterrey, N.L.</span>
            </li>
          </ul>
        </div>

        {/* Sucursales */}
        <div className="footer-section">
          <h3 className="footer-title">Sucursales</h3>
          <ul className="footer-list">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
              <span>Monterrey: Av. Garza S/N</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
              <span>Ciudad de México: Av. Reforma 123</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
              <span>Guadalajara: Calle Hidalgo 456</span>
            </li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section">
          <h3 className="footer-title">Enlaces Rápidos</h3>
          <ul className="footer-list">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section">
          <h3 className="footer-title">Síguenos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Comercializadora Garza. Todos los derechos reservados.
        </p>
        <p>
          <a href="#politica-privacidad">Política de Privacidad</a> |{' '}
          <a href="#terminos-servicio">Términos de Servicio</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;