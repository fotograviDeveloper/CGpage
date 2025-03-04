import React from 'react';
import ServiciosList from '../Components/Information/ServiciosList/ServiciosList';
import PortadaServicios from '../Components/Portadas/PortadaServicios';
import QuieroCotizarButton from '../Components/Botones/QuieroCotizar';
const ServiciosPage = () => {
  return (
    <div>
  <PortadaServicios></PortadaServicios>
      <ServiciosList></ServiciosList>
      <QuieroCotizarButton></QuieroCotizarButton>
    </div>
  );
};

export default ServiciosPage;