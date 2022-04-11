import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const PageHeaderWrapper = styled.div`
  ${tw`
    bg-cover 
    bg-no-repeat 
    bg-center
    mb-16 
    relative
  `}

  background-image: ${({ bg }) => `url(${bg})`};
`;

export const Overlay = styled.div`
  ${tw`
    absolute 
    z-10 
    w-full 
    h-full 
    top-0 
    left-0 
    bg-black 
    opacity-50
  `}
`;

export const PageHeaderInner = styled(Wrapper)`
  ${tw`
    w-full
    py-28
    md:py-44 
    flex 
    flex-col 
    gap-y-2
    relative 
    z-50
  `}
`;

export const Subtitle = styled.h2`
  ${tw`
    text-white 
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-3xl
    md:text-4xl 
    font-bold 
    text-white
    mb-3 
    uppercase
  `}
`;
