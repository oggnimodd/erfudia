import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import slugify from 'slugify';
import { useNavigate } from 'react-router';
import { DetailsWrapper, MainImage } from './PortfolioDetails.style';
import PortfolioDescriptions from '../../common/PortfolioDescriptions/PortfolioDescriptions';
import PortfolioImages from '../../common/PortfolioImages/PortfolioImages';
import PortfolioPagination from '../../common/PortfolioPagination/PortfolioPagination';
import files from '../../data/cms';

const { portfolio } = files;

const PortfolioDetails = () => {
  const navigate = useNavigate();

  const { slug } = useParams();
  const activePortfolio = portfolio.filter((i) => slugify(i.title, { lower: true }) === slug)[0];

  if(!activePortfolio) {
    return (
      <Navigate
        to="/404"
        replace
      />
    );
  }

  const {
    categories, thumbnail, description, title,
  } = activePortfolio || {};

  const images = activePortfolio['portfolio-images'];
  const companyWebsite = activePortfolio['company-website'];
  const activeId = portfolio.indexOf(activePortfolio);

  return (
    <DetailsWrapper>
      <MainImage
        alt={title}
        src={thumbnail}
      />
      <PortfolioDescriptions
        title={title}
        companyWebsite={companyWebsite}
        description={description}
        categories={categories}
      />
      <PortfolioImages
        images={images}
        title={title}
      />
      <PortfolioPagination
        activeId={activeId}
        portfolio={portfolio}
      />
    </DetailsWrapper>
  );
};

export default PortfolioDetails;
