import tw, { styled } from 'twin.macro';

export const AppWrapper = styled.div`
  ${tw`
    min-h-screen
    relative
    bg-white
  `}

  &.dark{
    ${tw`
      bg-primary
    `}
  }
`;
