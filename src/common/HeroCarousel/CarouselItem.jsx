import React from 'react';
import slugify from 'slugify';
import { Slide, Description } from './HeroCarousel.style';
import ImageFullWidth from '../ImageFullWidth/ImageFullWidth';
import Link from '../Link/Link';

const CarouselItem = ({ item }) => {
  const { thumbnail, title } = item;
  const slug = slugify(title, { lower: true });

  return (
    <Slide>
      <ImageFullWidth
        src={thumbnail}
        alt={title}
      />
      <Link to={`/portfolio/${slug}`}>
        <Description>
          {item.title}
        </Description>
      </Link>
    </Slide>
  );
};

export default CarouselItem;
