import React, { Fragment } from 'react';
import CTA from '../components/CTA/CTA';
import HeroStandard from '../components/HeroStandard/HeroStandard';
import PortfolioCards from '../components/PortfolioCards/PortfolioCards';
import SiteFooter from '../components/SiteFooter';

function Portfolio() {
  return (
    <Fragment>
      <HeroStandard
        logoTitle="Agency"
        title="Portfolio"
        subtitle="Agency provides a full service range including technical skills, design, business understanding.."
      />
      <PortfolioCards />
      <CTA />
      <SiteFooter />
    </Fragment>
  );
}

export default Portfolio;
