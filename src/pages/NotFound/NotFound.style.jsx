import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const NotFoundWrapper = styled(Wrapper)`
  ${tw`
    h-96 
    flex  
    flex-col
    items-center 
    justify-center
    dark:text-accent 
    gap-y-4
  `} 

  a{
    ${tw`
      underline
    `}
  }
`;

export const Text = styled.p`
  ${tw`
    text-6xl 
    text-center 
    dark:text-white
  `}
`;

export const Description = styled.p`
  ${tw`
    flex 
    flex-col 
    text-2xl
  `}
`;
