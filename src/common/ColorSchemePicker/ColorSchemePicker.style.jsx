import tw, { styled } from 'twin.macro';

export const PickerButton = styled.button`
  ${tw`
    fixed 
    bottom-3 
    right-3
    text-white 
    z-[100000] 
    bg-accent 
    rounded-full 
    w-10 
    h-10 
    text-xl  
    shadow-lg 
  `}

  svg{
    ${tw`
      absolute 
      top-1/2 
      left-1/2 
      -translate-x-1/2
      -translate-y-1/2  
      text-primary
    `}
  }
`;

export const Options = styled.div`
  ${tw` 
    fixed
    bottom-14 
    right-3
    w-44 
    h-60 
    bg-white 
    rounded-lg 
    shadow-xl
    z-[100000]  
    grid 
    grid-cols-3 
    p-4 
    gap-3
    items-center
  `}
`;

export const OptionItem = styled.button`
  ${tw`
    rounded-full 
    bg-red-500 
    w-full 
    relative 
    overflow-hidden
  `}

  aspect-ratio : 1/1;
  transform : rotate(45deg);
`;

export const HalfColor = styled.div`
  ${tw`
    absolute 
    w-1/2 
    h-full 
    top-0
  `}
`;
