import React from 'react';


import QuieroCotizarButton from '../Botones/QuieroCotizar';
import AboutSection from '../Information/nosotros/AboutSection';
import PortadaNosotros from '../Portadas/PortadaNosotros';
const NosotrosPage = () => {
  return (
    <div>
    
  <PortadaNosotros/>
<AboutSection/>
      <QuieroCotizarButton></QuieroCotizarButton>
    </div>
  );
};

export default NosotrosPage;