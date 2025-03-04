import React from "react";
import "./CSS/QuieroCotizarButton.css";
import { Link } from "react-router-dom";

const QuieroCotizarButton = () => {
  return (
    <div className="button-container">
      <Link to='/contacto'><button className="quiero-cotizar-button">
        Quiero una cotización 
      </button></Link>
    </div>
  );
};

export default QuieroCotizarButton;