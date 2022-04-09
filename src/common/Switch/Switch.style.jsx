import tw, { styled } from 'twin.macro';

export const HandleIcon = styled.div`
  ${tw`
    h-full 
    w-full
    justify-center
    items-center
    flex
  `}

  ${({ checked }) => (checked ? tw`text-accent` : tw`text-black`)}
`;
