import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const GridWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    gap-y-2
  `}
`;

export const Grid = styled.div`
  ${tw`
    w-full
    grid 
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    gap-x-12
    gap-y-6
  `}
`;

export const Card = styled.div`
  ${tw`
    flex 
    flex-col
    gap-y-2
  `}
`;

export const Label = styled.div`
  ${tw`
    text-xl 
    font-bold
    w-full 
    flex
    justify-between
    text-black 
    dark:text-accent
  `}
`;

export const Description = styled.div`
  ${tw`
    text-black 
    dark:text-white
  `}
`;

export const Number = styled.span`
  ${tw`
    font-bold
    text-xl
    text-right
    w-11 
    h-11
    text-black
    bg-transparent
    flex 
    items-center
    justify-center
    rounded-full
    border
    border-black
    self-end
    dark:(text-accent border-accent)
  `}
`;
