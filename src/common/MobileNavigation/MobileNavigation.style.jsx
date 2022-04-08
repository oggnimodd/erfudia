import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const NavigationWrapper = styled(Wrapper)`
  ${tw`
    lg:hidden 
    flex
    flex-col
    w-full
    absolute
    dark:(bg-black text-accent)
    bg-white
    flex 
    flex-col
    absolute
    top-[84px]
    left-0
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
      from-black 
      to-black
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
