import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Slide, SlideImage, Description } from './HeroCarousel.style';

const CarouselItem = ({ item }) => {
  const { imageUrl, title } = item;

  return (
    <Slide>
      <AspectRatio.Root ratio={2 / 0.9}>
        <SlideImage
          src={imageUrl}
          alt={title}
        />
      </AspectRatio.Root>
      <Description>
        {item.title}
      </Description>
    </Slide>
  );
};

export default CarouselItem;
