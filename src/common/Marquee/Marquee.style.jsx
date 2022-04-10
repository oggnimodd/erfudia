import tw, { styled } from 'twin.macro';

export const MarqueeWrapper = styled.div`
  ${tw`
    w-full 
    my-10
    bg-accent 
  `}

  .marquee{
    ${tw`
      min-w-0 
      select-none
    `}
  }
`;

export const TextWrapper = styled.div`
  ${tw`
    py-3 
    text-lg
    font-bold 
    flex 
    justify-between 
    items-center
    gap-x-6 
    mr-6
  `}
`;

export const Square = styled.div`
  ${tw`
    w-[5px] 
    h-[5px] 
    bg-black  
  `}
`;
