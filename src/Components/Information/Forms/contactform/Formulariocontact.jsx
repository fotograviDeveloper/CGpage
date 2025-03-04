import React, { useState } from "react";

import host from "../../../../Control/host";
import dudas from "../../../../database/dudas";
const ContactForm = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    estado: "",
    ciudad: "",
    telefono: "",
   correo: "",
    mensaje: "",
    asunto:"",
  });

  // Estados y ciudades
  const estados = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Estado de México",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ];

  const ciudadesPorEstado = {
    Aguascalientes: ["Aguascalientes", "Calvillo", "Jesús María"],
    "Baja California": ["Mexicali", "Tijuana", "Ensenada"],
    "Nuevo León": [
      "Abasolo",
      "Agualeguas",
      "Los Aldamas",
      "Allende",
      "Anáhuac",
      "Apodaca",
      "Aramberri",
      "Bustamante",
      "Cadereyta Jiménez",
      "El Carmen",
      "Cerralvo",
      "Ciénega de Flores",
      "China",
      "Doctor Arroyo",
      "Doctor Coss",
      "Doctor González",
      "Galeana",
      "García",
      "General Bravo",
      "General Escobedo",
      "General Terán",
      "General Treviño",
      "General Zaragoza",
      "General Zuazua",
      "Guadalupe",
      "Los Herreras",
      "Hidalgo",
      "Higueras",
      "Hualahuises",
      "Iturbide",
      "Juárez",
      "Lampazos de Naranjo",
      "Linares",
      "Marín",
      "Melchor Ocampo",
      "Mier y Noriega",
      "Mina",
      "Montemorelos",
      "Monterrey",
      "Parás",
      "Pesquería",
      "Los Ramones",
      "Rayones",
      "Sabinas Hidalgo",
      "Salinas Victoria",
      "San Nicolás de los Garza",
      "San Pedro Garza García",
      "Santa Catarina",
      "Santiago",
      "Vallecillo",
      "Villaldama",
    ],
    // Agrega más estados y ciudades según sea necesario
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Enviar datos al backend
  const enviarDatos = async (e) => {
    e.preventDefault();
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(`http://${host}/`, config);
      console.log(enviarDatos);
      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      // Redirigir o mostrar mensaje de éxito
      // window.location.href = "/";
      alert("se envio correctamente "); // mensaje de envio
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    
      <div className="contact-content">
        {/* Formulario de contacto */}
        <form className="contact-form" onSubmit={enviarDatos} accept-charset="UTF-8">
          {/* Nombre */}
          <div className="form-group">
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          {/* Empresa */}
          <div className="form-group">
            <input
              type="text"
              id="empresa"
              placeholder="Empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            />
          </div>

          {/* Estado */}
          <div className="form-group">
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              {estados.map((estado, index) => (
                <option key={index} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>

          {/* Ciudad */}
          <div className="form-group">
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
            <input
              type="tel"
              placeholder="¿Cual es tu telefono?"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Escribe tu correo"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          {/* ASUNTO*/}
          <div className="form-group">
          <select
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              
            >
              <option value="">¿Que servicio requiere?</option>
              {dudas.map((dudas, index) => (
                <option key={index} value={dudas}>
                  {dudas}
                </option>
              ))}
            </select>
          </div>

          {/* Mensaje */}
          <div className="form-group">
            <label htmlFor="mensaje">
              Cuentanos un poco sobre tu proyecto 😀
            </label>
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
   
  );
};

export default ContactForm;
