import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    w-full
    flex 
    flex-col 
    gap-y-4
  `}
`;

export const CardImage = styled.img`
  ${tw`
    w-full 
    h-full 
    object-cover 
    object-center
  `}
`;

export const CardInfo = styled.div`
  ${tw`
    flex 
    flex-col
    gap-y-3
  `}
`;

export const Description = styled.div`
  ${tw`
    flex 
    flex-col  
    gap-y-1
  `}
`;

export const Name = styled.div`
  ${tw`
    text-xl 
    dark:text-accent 
    font-semibold
  `}
`;

export const Role = styled.div`
  ${tw`
    dark:text-white 
    text-sm
  `}
`;
