import React, { Fragment } from 'react';
import SiteHeader from '../components/SiteHeader/index';
import Articles from '../components/Articles/Articles';
import ClientCarousel from '../components/ClientCarousel/ClientCarousel';
import SiteFooter from '../components/SiteFooter/index';
import HeroStandard from '../components/HeroStandard/HeroStandard';

function Blog() {
  return (
    <Fragment>
      <HeroStandard
        logoTitle="Agency"
        title="Blog Articles"
        subtitle="Agency provides a full service range including technical skills,
            design, business understanding."
      />
      <Articles />
      <ClientCarousel />
      <SiteFooter />
    </Fragment>
  );
}

export default Blog;
