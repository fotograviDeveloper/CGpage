import React from 'react';


import QuieroCotizarButton from '../Components/Botones/QuieroCotizar';
import AboutSection from '../Components/Information/nosotros/AboutSection';
import PortadaNosotros from '../Components/Portadas/PortadaNosotros';
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