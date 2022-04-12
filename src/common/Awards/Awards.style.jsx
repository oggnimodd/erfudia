import tw, { styled, theme } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const AwardsWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col 
    gap-y-8 
    pb-12
  `}
`;

export const AwardsList = styled.div`
  ${tw`
    flex 
    flex-col
  `}
`;

export const AwardItem = styled.div`
  ${tw`
    py-8
    flex 
    border-t 
    border-black
    border-opacity-10 
    text-black 
    dark:text-white 
    flex-wrap
    dark:(border-white border-opacity-10 )
    md:flex-nowrap
  `}

  &:nth-last-of-type(1){
    ${tw`
      border-b 
    `}
  }
`;

export const AwardItemRow = styled.div`
  ${tw`
    flex 
    w-full 
    items-start 
    md:items-center
  `}
`;

export const Number = styled.p`
  ${tw`
    text-4xl 
    font-bold 
    text-transparent 
    w-2/5  
    leading-[24px] 
    md:leading-none
  `}
  
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:${({ dark }) => (dark ? theme`colors.accent` : theme`colors.black`)}  ;
`;

export const Name = styled.p`
  ${tw` 
    text-right
    md:text-left
    text-xl
    font-bold 
    w-full
    md:(text-2xl) 
  `}
`;

export const Category = styled.p`
  ${tw`
    flex  
    w-full
    md:w-2/5
  `}
`;

export const Year = styled.p`
  ${tw`
    text-right 
    font-semibold
    text-right
    w-full
    md:w-2/5
  `}
`;
