import tw, { styled } from 'twin.macro';

export const NavigationWrapper = styled.nav`
  ${tw`
    hidden
    lg:block
  `}
`;

export const NavigationList = styled.ul`
  ${tw`
    flex 
    gap-x-10
    items-center
    h-full
  `}
`;

export const NavItem = styled.div`
  ${tw`
    h-full
    flex 
    items-center
  `}

  a {
    ${tw`
      h-full 
      flex
      items-center
      bg-gradient-to-r 
      from-primary 
      to-primary
      dark:(from-accent to-accent)
    `}

    background-position: 50% 90%;
    background-repeat: no-repeat;
    background-size: 0% 3px;
    transition: all 250ms;
    
    &.link-active {
      background-size: 100% 3px;
    } 
  }
`;
