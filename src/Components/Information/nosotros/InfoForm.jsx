import React from 'react'
const Infoform = (params) => {
    return(

    
     <div className="contact-info"> {/* Texto motivador e imagen */}
          <h2 className="contact-title">¡Cotiza con nosotros!</h2>
          <p className="contact-description">
            En Comercializadora Garza, estamos listos para ayudarte a encontrar las mejores soluciones
            para tus proyectos. Contáctanos y descubre lo fácil que es trabajar con nosotros.
          </p>
          <img
            src="/images/equipoteem.png" // Ruta de la imagen del equipo
            alt="Nuestro equipo"
            className="contact-image"
          />
        </div>

    )
}
export default Infoform;