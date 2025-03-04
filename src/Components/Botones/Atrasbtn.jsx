import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate de React Router
import './CSS/Atrasbtn.css'; // Importamos el archivo CSS

const BackButton = ({ text = "Regresar", className = "" }) => {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleGoBack = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <button className={`back-button ${className}`} onClick={handleGoBack}>
      {text}
    </button>
  );
};

export default BackButton;