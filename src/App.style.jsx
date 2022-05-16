import tw, { styled } from 'twin.macro';

export const AppWrapper = styled.div`
  ${tw`
    min-h-screen
    relative
    bg-white
    transition 
    transition-bg
    ease-out-sine
    duration-400 
  `}

  &.dark{
    ${tw`
      bg-primary
    `}
  }
`;
