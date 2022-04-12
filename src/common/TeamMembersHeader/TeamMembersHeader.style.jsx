import tw, { styled } from 'twin.macro';
import { HeaderLink } from '../HeaderLink';

export const HeaderWrapper = styled.div`
  ${tw`
    w-full
    flex 
    flex-col
    gap-y-4
    md:flex-row 
    justify-between  
  `}

  ${HeaderLink}{
    ${tw`
      self-start 
      md:self-end
    `}
  }
`;

export const Title = styled.div`
  ${tw`
    text-3xl
    md:text-4xl 
    font-bold 
    w-full
    md:w-2/3
    xl:w-1/2  
    uppercase 
    dark:text-accent
  `}
`;

export const Description = styled.div`
  ${tw`
    self-start 
    text-sm
    md:w-1/4 
    md:(self-end text-right)
    dark:text-white
  `}
`;
