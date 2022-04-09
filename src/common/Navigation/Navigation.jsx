import React from 'react';
import { navlinks } from '../../config/navlinks';
import { isNotEmpty } from '../../util/isNotEmpty';
import { NavigationWrapper, NavItem, NavigationList } from './Navigation.style';
import { NavLink } from '../Link/Link';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
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
        <ThemeSwitch />
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
