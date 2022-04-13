import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const PortfolioHeader = styled(Wrapper)`
  ${tw`
    pt-10
  `}
`;

export const Title = styled.div`
  ${tw`
    text-3xl
    md:text-4xl 
    dark:text-accent 
    uppercase 
    font-bold
  `}
`;
