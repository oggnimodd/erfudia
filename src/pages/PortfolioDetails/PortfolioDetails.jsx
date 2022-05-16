import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailsWrapper, MainImage } from './PortfolioDetails.style';
import PortfolioDescriptions from '../../common/PortfolioDescriptions/PortfolioDescriptions';
import PortfolioImages from '../../common/PortfolioImages/PortfolioImages';
import PortfolioPagination from '../../common/PortfolioPagination/PortfolioPagination';

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
  images: [
    'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/587958/pexels-photo-587958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7181850/pexels-photo-7181850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ],
};

const PortfolioDetails = () => {
  const params = useParams();

  const {
    alt, tags, imageUrl, description, companyWebsite, title, images,
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
      <PortfolioImages images={images} />
      <PortfolioPagination />
    </DetailsWrapper>
  );
};

export default PortfolioDetails;
