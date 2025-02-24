import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    estado: '',
    ciudad: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const estados = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua',
    'Ciudad de México', 'Coahuila', 'Colima', 'Durango', 'Estado de México', 'Guanajuato', 'Guerrero',
    'Hidalgo', 'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro',
    'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz',
    'Yucatán', 'Zacatecas',
  ];

  const ciudadesPorEstado = {
    'Aguascalientes': ['Aguascalientes', 'Calvillo', 'Jesús María'],
    'Baja California': ['Mexicali', 'Tijuana', 'Ensenada'],
    'Nuevo León': [  "Abasolo", "Agualeguas", "Los Aldamas", "Allende", "Anáhuac", "Apodaca",
      "Aramberri", "Bustamante", "Cadereyta Jiménez", "El Carmen", "Cerralvo",
      "Ciénega de Flores", "China", "Doctor Arroyo", "Doctor Coss",
      "Doctor González", "Galeana", "García", "General Bravo", "General Escobedo",
      "General Terán", "General Treviño", "General Zaragoza", "General Zuazua",
      "Guadalupe", "Los Herreras", "Hidalgo", "Higueras", "Hualahuises",
      "Iturbide", "Juárez", "Lampazos de Naranjo", "Linares", "Marín",
      "Melchor Ocampo", "Mier y Noriega", "Mina", "Montemorelos", "Monterrey",
      "Parás", "Pesquería", "Los Ramones", "Rayones", "Sabinas Hidalgo",
      "Salinas Victoria", "San Nicolás de los Garza", "San Pedro Garza García",
      "Santa Catarina", "Santiago", "Vallecillo", "Villaldama"],
    // Agrega más estados y ciudades según sea necesario
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]); // Guardar datos en un array
    alert('Formulario enviado correctamente');
    setFormData({
      nombre: '',
      empresa: '',
      estado: '',
      ciudad: '',
      telefono: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        {/* Texto motivador e imagen */}
        <div className="contact-info">
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

        {/* Formulario de contacto */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          {/* Empresa */}
          <div className="form-group">
            <label htmlFor="empresa">Empresa:</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            />
          </div>

          {/* Estado */}
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un estado</option>
              {estados.map((estado, index) => (
                <option key={index} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>

          {/* Ciudad */}
          <div className="form-group">
            <label htmlFor="ciudad">Ciudad:</label>
            <select
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              disabled={!formData.estado}
            >
              <option value="">Selecciona una ciudad</option>
              {formData.estado &&
                ciudadesPorEstado[formData.estado]?.map((ciudad, index) => (
                  <option key={index} value={ciudad}>
                    {ciudad}
                  </option>
                ))}
            </select>
          </div>

          {/* Teléfono */}
          <div className="form-group">
            <label htmlFor="telefono">Número de contacto:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mensaje */}
          <div className="form-group">
            <label htmlFor="mensaje">¿Qué necesitas?</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botón de enviar */}
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;