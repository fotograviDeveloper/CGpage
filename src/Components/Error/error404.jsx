
import './Error404.css'
//import ContactSection from '../Information/Forms/contactform/ContactSection';
const Error404 = () => {
    return (
      <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">¡Ups! Parece que te has perdido.</p>
        <p className="error-submessage">Lo sentimos, no pudimos encontrar la página que buscas.</p>
        <button className="error-button" onClick={() => window.location.href = '/'}>
          Regresar al Inicio
        </button>
      </div>
    </div>
    );
  };
  
  export default Error404;