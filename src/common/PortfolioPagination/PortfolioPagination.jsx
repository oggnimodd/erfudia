import React from 'react';
import { HiOutlineArrowNarrowLeft as ArrowLeft, HiOutlineArrowNarrowRight as ArrowRight } from 'react-icons/hi';
import { NavigationButton, PaginationWrapper, PortfolioListLink } from './PortfolioPagination.style';

const PortfolioPagination = ({ blogList, activeItem }) => {
  return (
    <PaginationWrapper>
      <NavigationButton to="/portfolio/test">
        <ArrowLeft />
        <span>Prev</span>
      </NavigationButton>
      <NavigationButton to="/portfolio/test">
        <span>Next</span>
        <ArrowRight />
      </NavigationButton>
      <PortfolioListLink to="/portfolio">Portfolio</PortfolioListLink>
    </PaginationWrapper>
  );
};

export default PortfolioPagination;
