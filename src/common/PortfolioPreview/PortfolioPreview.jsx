import React from 'react';
import Masonry from 'react-masonry-css';
import short from 'short-uuid';
import {
  PreviewWrapper,
  PreviewHeader,
  Subtitle,
  Title,
} from './PortfolioPreview.style';
import PreviewCard from './PreviewCard';
import { breakpoints } from '../../config/breakpoints';
import { isNotEmpty } from '../../util/isNotEmpty';
import Button from '../Button/Button';
import Link from '../Link/Link';
import { HeaderLink } from '../HeaderLink';
import files from '../../data/cms';

const { portfolio: p, topProjects } = files;
const choosenProjects = topProjects[0].list;
const portfolio = p.filter((i) => {
  return !choosenProjects.includes(i.title);
});

const {
  sm,
} = breakpoints;

const masonryBreakpoints = {
  default: 2,
  [sm]: 1,
};

const PortfolioPreview = () => {
  return (
    <PreviewWrapper>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"

      >
        <PreviewHeader>
          <Subtitle>
            Portfolio
          </Subtitle>
          <Title>
            Highlighted Work Projects
          </Title>
          <HeaderLink>
            <Link to="portfolio">
              Go To Portfolio
            </Link>
          </HeaderLink>
        </PreviewHeader>

        {
          isNotEmpty(portfolio) && portfolio.slice(0, 4).map((item) => {
            return (
              <PreviewCard
                key={short.generate()}
                item={item}
              />
            );
          })
        }
      </Masonry>
      <Link to="portfolio">
        <Button>
          Load More
        </Button>
      </Link>
    </PreviewWrapper>
  );
};

export default PortfolioPreview;
