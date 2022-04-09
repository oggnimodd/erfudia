import React from 'react';
import { HeroWrapper } from './Hero.style';
import HeroText from '../../common/HeroText/HeroText';
import HeroCarousel from '../../common/HeroCarousel/HeroCarousel';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroText />
      <HeroCarousel />
    </HeroWrapper>
  );
};

export default Hero;
