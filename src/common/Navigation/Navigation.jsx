import React from 'react';
import { navlinks } from '../../config/navlinks';
import { isNotEmpty } from '../../util/isNotEmpty';
import { NavigationWrapper, NavItem } from './Navigation.style';
import { NavLink } from '../Link/Link';

const Navigation = () => {
  return (
    <NavigationWrapper>
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
  );
};

export default Navigation;
