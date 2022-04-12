import tw, { styled } from 'twin.macro';

export const TeamMembersGrid = styled.div`
  ${tw` 
    grid 
    grid-cols-1
    gap-y-10
    sm:(gap-6 grid-cols-2)
    md:(gap-9 grid-cols-3)
    xl:gap-10 
  `}
`;
