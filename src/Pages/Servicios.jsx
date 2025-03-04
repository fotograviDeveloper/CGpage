import React from 'react';
import ServiciosList from '../Information/ServiciosList/ServiciosList';
import PortadaServicios from '../Portadas/PortadaServicios';
import QuieroCotizarButton from '../Botones/QuieroCotizar';
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