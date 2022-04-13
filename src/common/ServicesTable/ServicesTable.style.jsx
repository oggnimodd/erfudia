import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const ServicesTableWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col   
    gap-y-10
  `}
`;

export const Row = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-2 
    md:gap-y-4
  `}
`;

export const Number = styled.div`
  ${tw`
    font-bold 
    text-xl
    dark:text-accent
  `}
`;

export const Content = styled.div`
  ${tw`
    flex 
    flex-col
    gap-y-1
    md:flex-row
  `}
`;

export const Label = styled.div`
  ${tw`
    text-xl 
    font-bold 
    md:w-1/2
    dark:text-accent
  `}
`;

export const Description = styled.div`
  ${tw`
    md:w-1/2 
    dark:text-white
  `}
`;
