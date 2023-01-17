import React, { Fragment } from 'react';
import HeroWithMedia from '../components/HeroWithMedia/HeroWithMedia';
import Partners from '../components/Partners/Partners';
import SiteFooter from '../components/SiteFooter';

function Home() {
  return (
    <Fragment>
      <HeroWithMedia
        subtitle="Modern Studio"
        title="We’re Help To Build Your Dream Project"
        tagline="Agency provides a full service range including technical skills, design, business understanding."
      />
      <Partners />
      <SiteFooter />
    </Fragment>
  );
}

export default Home;
