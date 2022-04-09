import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const HeaderWrapper = styled.header`
  ${tw`
    w-full
    flex 
    justify-center
    dark:text-accent
    font-semibold
    dark:bg-primary 
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
