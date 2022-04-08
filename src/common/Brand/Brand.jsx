import React from 'react';
import { BrandWrapper } from './Brand.style';
import Link from '../Link/Link';

const Brand = () => {
  return (
    <Link to="/">
      <BrandWrapper>
        Erfudia
      </BrandWrapper>
    </Link>
  );
};

export default Brand;
