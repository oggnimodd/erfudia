import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailsWrapper, MainImage } from './PortfolioDetails.style';
import PortfolioDescriptions from '../../common/PortfolioDescriptions/PortfolioDescriptions';

// Just placeholder data
const data = {
  imageUrl: 'https://images.pexels.com/photos/1310788/pexels-photo-1310788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Portfolio Main Image',
  tags: [
    'Graphic Design',
    'Illustration',
    'Art Direction',
    'Creative Direction',
    'Marketing',
  ],
  title: 'Crimson Eyes',
  description: ' Non eget sed nunc, cras. Viverra viverra dolor massa facilisis risus aTortor sagittis dolor massa molestie lorem magna interd um nibh vel empus empsus felis nec dui nam est mauris Blandit vel feugiat mi bibendum liquam sollicitudin proin aectus dui rnare massa aliquam.Blandit vel feugiat mi bibendum liquam sollicitudin proin aectus dui rnare massa aliquam.Blandit vel feugiat mi bibendum liquam sollicitudin proin aectus dui rnare massa aliquam.',
  companyWebsite: 'https://www.instagram.com',
};

const PortfolioDetails = () => {
  const params = useParams();

  const {
    alt, tags, imageUrl, description, companyWebsite, title,
  } = data;

  return (
    <DetailsWrapper>
      <MainImage
        alt={alt}
        src={imageUrl}
      />
      <PortfolioDescriptions
        title={title}
        companyWebsite={companyWebsite}
        description={description}
        tags={tags}
      />
    </DetailsWrapper>
  );
};

export default PortfolioDetails;
