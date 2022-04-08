import React from 'react';
import { Portal } from 'react-portal';
import { NavigationWrapper, NavItem } from './MobileNavigation.style';
import { navlinks }from '../../config/navlinks';
import { isNotEmpty } from '../../util/isNotEmpty';
import { NavLink } from '../Link/Link';

const MobileNavigation = (props) => {
  return (
    <Portal node={document && document.getElementById('app')}>
      <NavigationWrapper as="ul">
        {
          isNotEmpty(navlinks) && navlinks.map((item) => {
            return (
              <NavItem
                key={`navlink-item-${item.path}`}
              >
                <NavLink
                  to={item.path}
                >{item.label}
                </NavLink>
              </NavItem>
            );
          })
        }
      </NavigationWrapper>
    </Portal>
  );
};

export default MobileNavigation;
