import tw, { styled } from 'twin.macro';

export const SocmedWrapper = styled.div`
  ${tw`
    flex 
    gap-x-3
  `}
`;

export const SocmedIcon = styled.a`
  ${tw`
    hover:text-accent
    dark:(text-white hover:text-accent)
  `}
`;
