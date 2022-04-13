import React from 'react';
import short from 'short-uuid';
import { PortfolioListWrapper } from './PortfolioList.style';
import { isNotEmpty } from '../../util/isNotEmpty';
import { portfolio } from '../../data/portfolio';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

const PortfolioList = () => {
  return (
    <PortfolioListWrapper>
      {
        isNotEmpty(portfolio) && portfolio.map((item) => {
          return (
            <PortfolioCard
              key={short.generate()}
              item={item}
            />
          );
        })
      }
    </PortfolioListWrapper>
  );
};

export default PortfolioList;
