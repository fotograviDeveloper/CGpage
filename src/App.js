import React from 'react';
import Navbar from './Components/Navbar/navbar';
//import Principal from './Components/principal';
import Carousel from '../src/Components/carrusel/carrousel'
import BrandsSection from '../src/Components/Information/Clientes/BrandsSection'
import ContactSection from '../src/Components/Information/Forms/contactform/ContactSection'
import AbautSection from './Components/Information/nosotros/AboutSection'
import Footer from './Components/footer/Footer'
function App() {
  return (
    <div className="App">
      {/* Barra de navegación (visible en todas las páginas) */}
   <Navbar/>
      
      {/* Componente Principal cargado directamente */}
      <Carousel />
      <AbautSection/>
      <BrandsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
