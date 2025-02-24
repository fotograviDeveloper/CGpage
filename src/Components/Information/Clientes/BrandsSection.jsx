import React from 'react';
import './BrandsSection.css';

const BrandsSection = () => {
  const brands = [
    { name: 'Tierra Regia', logo: '/logos/tierra-regia.png' },
    { name: 'DAMSA', logo: '/logos/damsa.png' },
    { name: 'Truba', logo: '/logos/ruba.png' },
    { name: 'Trabezada', logo: '/logos/trabezada.png' },
    { name: 'Escocio', logo: '/logos/espacios.png' },
    { name: 'Alora', logo: '/logos/alora.png' },
    { name: 'Texxo', logo: '/logos/texxo.png' },
    { name: 'VicomsA', logo: '/logos/vicomsa.png' },
    { name: 'BBVA', logo: '/logos/bbva.png' },
    { name: 'TYA', logo: '/logos/tya.png' },
    { name: 'Hampton by Hilton', logo: '/logos/hamton.png' },
    { name: 'Little Caesars', logo: '/logos/cesar.png' },
  ];

  return (
    <section className="brands-section">
      <div className="brands-content">
        {/* Título principal */}
        <h2 className="brands-title">Marcas que han confiado en nosotros</h2>

        {/* Logos de las marcas */}
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img
                src={brand.logo}
                alt={brand.name}
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;