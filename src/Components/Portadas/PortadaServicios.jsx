import React from 'react';
import './PortadaServicios.css';


const PortadaServicios = () => {
  return (
    <div className="portada-servicios">
      <img src='/Images/Plan-de-servicio.png'
 alt="Servicios" className="portada-imagen" />
      <div className="portada-overlay">
      <h1 className='portada-titulo'>Nuestros Servicios</h1>
        <p className='portada-descripcion'>
          Con nuestro sistema <strong>"All in One"</strong>, ofrecemos una amplia gama de servicios diseñados para optimizar tus proyectos y garantizar tu satisfacción.
        </p>
      </div>
    </div>
  );
};

export default PortadaServicios;
