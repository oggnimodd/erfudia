import React from 'react';
import Hero from '../../layout/Hero/Hero';
import MainDescription from '../../common/MainDescription/MainDescription';
import PortfolioPreview from '../../common/PortfolioPreview/PortfolioPreview';
import ServicesGrid from '../../common/ServicesGrid/ServicesGrid';

const Home = () => {
  return (
    <>
      <Hero />
      <MainDescription />
      <PortfolioPreview />
      <ServicesGrid />
    </>
  );
};

export default Home;
