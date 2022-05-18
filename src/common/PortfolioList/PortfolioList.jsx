import React from 'react';
import short from 'short-uuid';
import { PortfolioListWrapper } from './PortfolioList.style';
import { isNotEmpty } from '../../util/isNotEmpty';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import files from '../../data/cms';

const { portfolio } = files;

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
