import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const HeaderWrapper = styled.header`
  ${tw`
    w-full
    flex 
    justify-center
    dark:text-accent
  `}
`;

export const HeaderInner = styled(Wrapper)`
  ${tw`
    py-6
    flex 
    justify-between
  `}
`;
