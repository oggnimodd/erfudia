import React from 'react';
import { Slide, Description } from './HeroCarousel.style';
import ImageFullWidth from '../ImageFullWidth/ImageFullWidth';

const CarouselItem = ({ item }) => {
  const { imageUrl, title } = item;

  return (
    <Slide>
      <ImageFullWidth
        src={imageUrl}
        alt={title}
      />
      <Description>
        {item.title}
      </Description>
    </Slide>
  );
};

export default CarouselItem;
