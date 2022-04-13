import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const PortfolioListWrapper = styled(Wrapper)`
  ${tw`
    grid 
    grid-cols-1
    gap-y-10
    sm:(gap-6 grid-cols-2)
    md:(gap-9 grid-cols-3)
    xl:gap-10  
    py-10
  `}
`;
