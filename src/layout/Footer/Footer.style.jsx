import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const FooterWrapper = styled(Wrapper)`
  ${tw`
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-y-8
  `}
`;

export const Links = styled.div`
  ${tw`
    grid
    grid-cols-1  
    sm:grid-cols-3
    gap-8
  `}
`;

export const LinksCol = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-3
  `}
`;

export const LinksHeader = styled.p`
  ${tw`
    font-bold 
    dark:text-accent
  `}
`;

export const LinksContent = styled.ul`
  ${tw`
    flex 
    flex-col 
    gap-y-2
    dark:text-white
  `}
`;

export const Item = styled.li``;

export const Copyright = styled.div`
  ${tw` 
    w-full 
    col-span-1 
    md:col-span-2 
    flex 
    flex-col
    sm:flex-row
    justify-between
    items-center
    py-8
  `}
`;

export const CopyrightText = styled.p`
  ${tw`
    dark:text-white
  `}
    
  a{
    ${tw`
      text-accent 
      font-semibold 
      underline 
    `}
  }
`;
