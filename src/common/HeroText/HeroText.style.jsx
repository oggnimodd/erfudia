import tw, { styled } from 'twin.macro';

export const HeroTextWrapper = styled.div`
  ${tw`
    w-full 
    flex
    items-center 
    justify-center
    py-10
  `}
`;

export const Text = styled.h1`
  ${tw`
    xl:text-[5rem]
    lg:text-6xl
    md:text-5xl
    sm:text-4xl
    text-3xl
    uppercase
    dark:text-accent
    font-bold
    text-center
  `}
`;
