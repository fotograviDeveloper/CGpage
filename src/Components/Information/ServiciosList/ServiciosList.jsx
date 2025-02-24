// src/pages/Servicios.js
import React from 'react';
import './ServiciosList.css';

// Importar imágenes

const Servicios = () => {
  return (
    <div className="servicios-container">
      {/* Encabezado */}
      <header className="servicios-header">
    
      </header>

      {/* Sección de servicios generales */}
      <section className="servicios-section">
        <h2>Servicios Generales</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <img src='/Images/Plan-de-servicio.png' alt="Instalación y Mantenimiento" className="servicio-img" />
            <h3>Instalación y Mantenimiento</h3>
            <p>
              Ofrecemos servicios de instalación y mantenimiento para garantizar el funcionamiento óptimo de nuestros productos.
            </p>
          </div>
          <div className="servicio-card">
            <img src='/Images/Plan-de-servicio.png' alt="Optimización de Proyectos" className="servicio-img" />
            <h3>Optimización de Proyectos</h3>
            <p>
              Ayudamos a optimizar tus proyectos para reducir costos y tiempos, maximizando la eficiencia.
            </p>
          </div>
          <div className="servicio-card">
            <img src='/Images/Plan-de-servicio.png' alt="Capacitación y Asesoría" className="servicio-img" />
            <h3>Capacitación y Asesoría</h3>
            <p>
              Capacitamos a tu personal y brindamos asesoría profesional para asegurar el éxito de tus proyectos.
            </p>
          </div>
          <div className="servicio-card">
            <img src='/Images/Plan-de-servicio.png' alt="Cobertura Nacional 24/7" className="servicio-img" />
            <h3>Cobertura Nacional 24/7</h3>
            <p>
              Contamos con cobertura nacional y atención las 24 horas para apoyarte en cualquier momento.
            </p>
          </div>
          <div className="servicio-card">
            <img src='/Images/Plan-de-servicio.png' alt="Servicio Postventa" className="servicio-img" />
            <h3>Servicio Postventa</h3>
            <p>
              Brindamos servicio postventa tanto a desarrolladores como a usuarios finales, garantizando una relación duradera.
            </p>
          </div>
          <div className="servicio-card">
            <img src='/Images/Plan-de-servicio.png' alt="Hipoteca Verde" className="servicio-img" />
            <h3>Hipoteca Verde</h3>
            <p>
              Somos el único proveedor integral que cumple con todos los requisitos para la Hipoteca Verde.
            </p>
          </div>
        </div>
      </section>

      {/* Sección para desarrolladoras */}
      <section className="desarrolladoras-section">
        <h2>Para Desarrolladoras</h2>
        <div className="departamentos-grid">
          <div className="departamento-card">
            <img src='/Images/Plan-de-servicio.png' alt="Compras y Cobranza" className="departamento-img" />
            <h3>Compras y Cobranza</h3>
            <ul>
              <li>Reducción de trabajo administrativo.</li>
              <li>Facilidad en procesos de pago.</li>
              <li>Entregas inmediatas sin pedido mínimo.</li>
              <li>Adaptación a avances de obra.</li>
            </ul>
          </div>
          <div className="departamento-card">
            <img src='/Images/Plan-de-servicio.png' alt="Proyectos" className="departamento-img" />
            <h3>Proyectos</h3>
            <ul>
              <li>Consultoría en instalaciones.</li>
              <li>Optimización de proyectos.</li>
              <li>Especificación de soluciones.</li>
              <li>Requerimientos de Infonavit actualizados.</li>
            </ul>
          </div>
          <div className="departamento-card">
            <img src='/Images/Plan-de-servicio.png' alt="Postventa" className="departamento-img" />
            <h3>Postventa</h3>
            <ul>
              <li>Instalación y mantenimiento.</li>
              <li>Capacitación in situ o telefónica.</li>
              <li>Servicio técnico local rápido y profesional.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección de infraestructura */}
      <section className="infraestructura-section">
        <h2>Nuestra Infraestructura</h2>
        <img src='/Images/Plan-de-servicio.png' alt="Infraestructura" className="infraestructura-img" />
        <p>
          Contamos con infraestructura de vanguardia, tecnología avanzada y personal altamente capacitado para garantizar el éxito de tus proyectos.
        </p>
      </section>
    </div>
  );
};

export default Servicios;