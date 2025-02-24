import React from 'react';
import ContactSectionForm from '../Components/Information/Forms/contactform/ContactSection'

import Carousel from '../Components/carrusel/carrousel';
import AboutSection from '../Components/Information/nosotros/AboutSection'
import BrandSection from '../Components/Information/Clientes/BrandsSection'
const Principal = () => {
  return (
    <div>

      <Carousel />
      <AboutSection />
      <BrandSection />
      <ContactSectionForm />
    

    </div>
  );
};

export default Principal;