import tw, { styled } from 'twin.macro';

export const CarouselWrapper = styled.div`
  ${tw`
    w-full 
    text-white 
    dark:text-accent
    relative
  `}
`;

export const Slide = styled.div`
  ${tw`
    h-full
    w-full 
    flex 
    flex-col
    relative
    justify-between
    gap-y-6
    sm:gap-y-8
  `}
`;

export const SlideImage = styled.img`
  ${tw`
    object-center 
    object-cover
    w-full 
    h-full
  `}
`;

export const Description = styled.h2`
  ${tw`
    lg:text-lg
    dark:text-accent
    text-primary
    font-bold
    max-w-[60%]
  `}
`;

export const NavigationWrapper = styled.div`
  ${tw`
    absolute
    flex
    bottom-0
    gap-x-3
    right-0
    z-[1000]
  `}
`;

export const NavigationButton = styled.button`
  ${tw`
    w-10 
    h-10 
    flex 
    items-center
    justify-center
    border
    text-primary
    border-primary
    dark:(text-white border-white)
    dark:hover:(text-accent border-accent)
  `}
`;
