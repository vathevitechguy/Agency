import React, { Fragment } from 'react';
import ClientCarousel from '../components/ClientCarousel/ClientCarousel';
import SiteFooter from '../components/SiteFooter/index';
import HeroStandard from '../components/HeroStandard/HeroStandard';
import CTA from '../components/CTA/CTA';
import AboutBody from '../components/AboutBody/AboutBody';
import TeamCarousel from '../components/TeamCarousel/TeamCarousel';
import Faqs from '../components/Faqs/Faqs';
import Partners from '../components/Partners/Partners';

function AboutUs() {
  return (
    <Fragment>
      <HeroStandard
        logoTitle="Agency"
        title="About Us"
        subtitle="Agency provides a full service range including technical skills, design, business understanding."
      />
      <AboutBody />
      <TeamCarousel />
      <ClientCarousel />
      <Faqs />
      <Partners />
      <CTA zIndexed={true} />
      <SiteFooter lightTheme={true} />
    </Fragment>
  );
}

export default AboutUs;
