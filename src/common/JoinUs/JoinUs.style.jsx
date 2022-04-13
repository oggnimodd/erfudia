import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const JoinUsWrapper = styled(Wrapper)`
  ${tw`
    py-16
    md:py-24 
  `}
`;

export const Text = styled.div`
  ${tw`
    w-full 
    font-bold  
    text-2xl
    sm:text-3xl
    md:(text-4xl w-4/5) 
    mx-auto 
    text-center 
    dark:text-accent
  `}
`;

export const CtaLink = styled.span`
  ${tw`
    text-[#303133] 
    underline
    dark:text-white
  `}
`;
