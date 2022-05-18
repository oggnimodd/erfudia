import React from 'react';
import { HiOutlineArrowNarrowLeft as ArrowLeft, HiOutlineArrowNarrowRight as ArrowRight } from 'react-icons/hi';
import slugify from 'slugify';
import { NavigationButton, PaginationWrapper, PortfolioListLink } from './PortfolioPagination.style';

const createSlug = (string) => slugify(string, { lower: true });

const PortfolioPagination = ({ portfolio, activeId }) => {
  const length = portfolio.length;

  const next = () => {
    let nextId = activeId + 1;
    nextId = nextId === length ? 0 : nextId;
    const nextTitle = portfolio[nextId].title;
    const nextPath = createSlug(nextTitle);
    return `/portfolio/${nextPath}`;
  };

  const prev = () => {
    let prevId = activeId - 1;
    prevId = prevId === -1 ? portfolio.length - 1 : prevId;
    const prevTitle = portfolio[prevId].title;
    const prevPath = createSlug(prevTitle);
    return `/portfolio/${prevPath}`;
  };

  const nextPath = next();
  const prevPath = prev();

  return (
    <PaginationWrapper>
      <NavigationButton to={prevPath}>
        <ArrowLeft />
        <span>Prev</span>
      </NavigationButton>
      <NavigationButton to={nextPath}>
        <span>Next</span>
        <ArrowRight />
      </NavigationButton>
      <PortfolioListLink to="/portfolio">Portfolio</PortfolioListLink>
    </PaginationWrapper>
  );
};

export default PortfolioPagination;
