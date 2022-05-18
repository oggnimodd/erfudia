import React from 'react';
import slugify from 'slugify';
import { Image as CardImage, ProjectInfo as CardInfo } from '../ListCard/ListCard';
import { CardWrapper }from './PortfolioCard.style';
import Link from '../Link/Link';

const PortfolioCard = ({ item }) => {
  const { thumbnail, title, categories } = item;

  const path = slugify(title, { lower: true });

  return (
    <CardWrapper>
      <Link to={`/portfolio/${path}`}>
        <CardImage
          ratio={8 / 9}
          imageUrl={thumbnail}
          alt={title}
        />
      </Link>

      <CardInfo
        path={path}
        title={title}
        category={categories.join(', ')}
      />
    </CardWrapper>
  );
};

export default PortfolioCard;
