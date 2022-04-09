import React from 'react';
import {
  Card,
  CardImage,
  CardTitle,
  CardCategory,
} from './PortfolioPreview.style';

const PreviewCard = ({ item }) => {
  const { imageUrl, title, category } = item;

  return (
    <Card>
      <CardImage
        src={imageUrl}
        alt={title}
      />
      <CardTitle>{title}</CardTitle>
      <CardCategory>{category}</CardCategory>
    </Card>
  );
};

export default PreviewCard;
