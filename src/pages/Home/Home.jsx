import React from 'react';
import Hero from '../../layout/Hero/Hero';
import MainDescription from '../../common/MainDescription/MainDescription';
import PortfolioPreview from '../../common/PortfolioPreview/PortfolioPreview';
import ServicesGrid from '../../common/ServicesGrid/ServicesGrid';
import ProfileVideo from '../../common/ProfileVideo/ProfileVideo';
import Testimonials from '../../common/Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <MainDescription />
      <PortfolioPreview />
      <ServicesGrid />
      <ProfileVideo />
      <Testimonials />
    </>
  );
};

export default Home;
