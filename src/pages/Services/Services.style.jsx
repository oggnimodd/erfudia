import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const ServicesDescription = styled(Wrapper)`
  ${tw`
    flex 
    flex-col 
    justify-center  
    gap-y-4 
    mb-10
  `}
`;

export const Title = styled.p`
  ${tw`
    text-center 
    text-3xl 
    font-bold 
    dark:text-accent
  `}
`;

export const Text = styled.p`
  ${tw`
    text-center 
    lg:w-2/3
    mx-auto 
    dark:text-white
  `}
`;
