import React from 'react';
import { Image as CardImage, ProjectInfo as CardInfo } from '../ListCard/ListCard';
import { CardWrapper }from './PortfolioCard.style';

const PortfolioCard = ({ item }) => {
  const { imageUrl, title, category } = item;

  return (
    <CardWrapper>
      <CardImage
        ratio={8 / 9}
        imageUrl={imageUrl}
        alt={title}
      />

      <CardInfo
        title={title}
        category={category}
      />
    </CardWrapper>
  );
};

export default PortfolioCard;
