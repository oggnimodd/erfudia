import React from 'react';
import slugify from 'slugify';
import {
  Card,
  CardImage,
  CardTitle,
  CardCategory,
} from './PortfolioPreview.style';
import Link from '../Link/Link';

const PreviewCard = ({ item }) => {
  const { thumbnail, title, categories } = item;
  const path = slugify(title, { lower: true });

  return (
    <Card>
      <Link to={`/portfolio/${path}`}>
        <CardImage
          src={thumbnail}
          alt={title}
        />
      </Link>

      <Link to={`/portfolio/${path}`}>
        <CardTitle>{title}</CardTitle>
      </Link>
      <CardCategory>{categories[categories.length - 1]}</CardCategory>
    </Card>
  );
};

export default PreviewCard;
