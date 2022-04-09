import React from 'react';
import { HeroWrapper } from './Hero.style';
import HeroText from '../../common/HeroText/HeroText';
import HeroCarousel from '../../common/HeroCarousel/HeroCarousel';
import MainDescription from '../../common/MainDescription/MainDescription';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroText />
      <HeroCarousel />
      <MainDescription />
    </HeroWrapper>
  );
};

export default Hero;
