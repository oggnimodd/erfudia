import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const TestimonialsWrapper = styled(Wrapper)`
  ${tw`
    flex
    py-10
    items-center
  `}
`;

export const CarouselWrapper = styled.div`
  ${tw`
    w-[95%]
    xl:w-8/12
    pr-2
  `}
`;

export const CarouseItem = styled.div`
  ${tw`
    w-full 
    select-none
  `}

  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
`;

export const TestimonialText = styled.p`
  ${tw`
    text-xl
    md:text-2xl 
    font-bold
    mb-10
    text-black 
    dark:text-white
  `}
`;

export const TestimonialName = styled.div`
  ${tw`
    font-bold
    dark:text-accent
  `}
`;

export const TestimonialCompany = styled.div`
  ${tw`
    dark:text-accent
  `}
`;

export const BulletWrapper = styled.div`
  ${tw`
    flex 
    flex-col 
    h-full
    gap-y-3
    dark:text-accent
  `}

  .swiper-pagination-bullet{
    ${tw`
      w-[10px]
      h-[10px] 
      inline-block 
      bg-transparent 
      border-2 
      border-black 
      dark:border-accent
      opacity-100
      transition 
      ease-in
      duration-200
    `}
  }

  .swiper-pagination-bullet-active{
    ${tw`
      bg-black 
      dark:bg-accent
      scale-[1.1]
    `}
  }
`;
