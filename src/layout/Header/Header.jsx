import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HeaderWrapper, HeaderInner, MenuIcon } from './Header.style';
import Brand from '../../common/Brand/Brand';
import Navigation from '../../common/Navigation/Navigation';
import MobileNavigation from '../../common/MobileNavigation/MobileNavigation';
import useShowNavigation from '../../hooks/useShowNavigation';

const Header = () => {
  const { showNavigation, toggleNavigation } = useShowNavigation();

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Brand />
        <MenuIcon onClick={toggleNavigation}>
          {
            showNavigation
              ? <AiOutlineClose />
              : <AiOutlineMenu />
          }
        </MenuIcon>
        <Navigation />

        {
          showNavigation && <MobileNavigation />
        }
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
