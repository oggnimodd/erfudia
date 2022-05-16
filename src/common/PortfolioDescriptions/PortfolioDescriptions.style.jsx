import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    w-full 
    flex
    flex-col
    sm:flex-row 
    py-12
    sm:py-20
  `}
`;

export const Tags = styled.ul`
  ${tw`
    flex 
    flex-col
    list-none 
    gap-y-3
    text-black 
    dark:text-white
    mb-10
    sm:w-4/12
    sm:mb-0 
  `}

  li{
    ${tw`
      text-sm
    `}
  }
`;

export const Meta = styled.div`
  ${tw`
    sm:w-8/12 
    flex 
    flex-col
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-xl
    lg:text-2xl
    dark:text-accent
    text-primary
    font-bold
  `}
`;

export const Description = styled.p`
  ${tw`
    text-sm 
    mt-5
    leading-relaxed
    text-black
    dark:text-white 
  `}
`;

export const ClientWebsite = styled.a`
  ${tw`
    text-black 
    dark:text-accent 
    mt-8
    sm:mt-10
    font-semibold
    self-start 
    text-sm 
    border-b
    dark:border-accent
    border-black
    w-auto 
  `}
`;
