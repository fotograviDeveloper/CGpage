import React from 'react';


import QuieroCotizarButton from '../Components/Botones/QuieroCotizar';
import AboutSection from '../Components/Information/nosotros/AboutSection';
import PortadaNosotros from '../Components/Portadas/PortadaNosotros';
import BackButton from '../Components/Botones/Atrasbtn';
const NosotrosPage = () => {
  return (
    <div>
    <BackButton></BackButton>
  <PortadaNosotros/>
<AboutSection/>
      <QuieroCotizarButton></QuieroCotizarButton>
    </div>
  );
};

export default NosotrosPage;