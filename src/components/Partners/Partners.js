import React from 'react';
import { BrandPartners } from '../../constant/script';
import './Partners.scss';

const Partners = () => {
  return (
    <section className="Partners">
      <div className="Partners__wrapper">
        {BrandPartners.map((partner) => (
          <img
            className="Partners__logo"
            key={partner.id}
            src={partner.logoSrc}
            alt={partner.companyName}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
