import React from 'react';
import Masonry from 'react-masonry-css';
import { isNotEmpty } from '../../util/isNotEmpty';
import { ListWrapper, Image } from './PortfolioImages.style';
import { breakpoints } from '../../config/breakpoints';

const {
  sm,
} = breakpoints;

const masonryBreakpoints = {
  default: 2,
  [sm]: 1,
};

const PortfolioImages = ({ images, title }) => {
  return (
    <ListWrapper>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"

      >
        {
          isNotEmpty(images) && images.map((i) => {
            return (
              <Image
                key={`${title}-${i}`}
                src={i}
              />
            );
          })
        }
      </Masonry>
    </ListWrapper>
  );
};

export default PortfolioImages;
