import React from 'react';
import { Portal } from 'react-portal';
import { NavigationWrapper, NavItem, NavigationList } from './MobileNavigation.style';
import { navlinks }from '../../config/navlinks';
import { isNotEmpty } from '../../util/isNotEmpty';
import { NavLink } from '../Link/Link';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const MobileNavigation = ({ closeNavigation }) => {
  return (
    <Portal node={document && document.getElementById('app')}>
      <NavigationWrapper as="nav">
        <NavigationList>
          {
            isNotEmpty(navlinks) && navlinks.map((item) => {
              return (
                <NavItem
                  key={`navlink-item-${item.path}`}
                >
                  <NavLink
                    handleClick={closeNavigation}
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                </NavItem>
              );
            })
          }
          <ThemeSwitch />
        </NavigationList>
      </NavigationWrapper>
    </Portal>
  );
};

export default MobileNavigation;
