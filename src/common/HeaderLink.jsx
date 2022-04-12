import tw, { styled } from 'twin.macro';

export const HeaderLink = styled.div`
  ${tw`
    font-semibold
    border-b
    border-black
    self-start
    dark:(text-white border-white)
  `}
`;
