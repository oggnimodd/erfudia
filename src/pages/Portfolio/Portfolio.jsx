import React from 'react';
import PortfolioList from '../../common/PortfolioList/PortfolioList';
import { PortfolioHeader, Title } from './Portfolio.style';
import Marquee from '../../common/Marquee/Marquee';

const Portfolio = () => {
  return (
    <>
      <PortfolioHeader>
        <Title>Our portfolio</Title>
      </PortfolioHeader>
      <PortfolioList />
      <Marquee text="In creativity we trust" />
    </>
  );
};

export default Portfolio;
