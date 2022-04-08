import React from 'react';
import { HeaderWrapper, HeaderInner } from './Header.style';
import Brand from '../../common/Brand/Brand';
import Navigation from '../../common/Navigation/Navigation';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Brand />
        <Navigation />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
