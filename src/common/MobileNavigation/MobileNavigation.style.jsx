import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const NavigationWrapper = styled(Wrapper)`
  ${tw`
    lg:hidden 
    w-full
    absolute
    dark:(bg-primary text-accent)
    bg-white
    top-[84px]
    left-0
    z-[2000000]
    fixed
  `}

  height: calc(100% - 84px);
`;

export const NavigationList = styled.ul`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    gap-y-5
  `}
`;

export const NavItem = styled.li`
  ${tw`
    text-lg
    self-start
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
