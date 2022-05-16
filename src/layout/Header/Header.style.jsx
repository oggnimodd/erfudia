import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const HeaderWrapper = styled.header`
  ${tw`
    w-full
    block 
    justify-center
    font-semibold
    sticky 
    top-0
    z-[9999]
    bg-white
    dark:(bg-primary text-accent) 
    transition 
    transition-bg
    ease-out-sine
    duration-400 
  `}
`;

export const HeaderInner = styled(Wrapper)`
  ${tw`
    py-6
    flex 
    justify-between
    relative
  `}
`;

export const MenuIcon = styled.button`
  ${tw`
    lg:hidden
    text-3xl 
  `}
`;
