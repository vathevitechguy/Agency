import React from 'react';
import './Brand.scss';
// import icons from './public/assets/icons/';
const BrandLogo = (props) => {
  const title = props.title;
  return (
    <div className="BrandLogo">
      <span className="BrandLogo__logo">
        <span className="BrandLogo__icon">
          <img src="./assets/icons/logo.png" />
        </span>
        <h1 className="BrandLogo__title">{title}</h1>
      </span>
    </div>
  );
};

export default BrandLogo;
