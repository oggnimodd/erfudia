import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const QuestionsWrapper = styled(Wrapper)`
  ${tw`
    flex  
    flex-col
    gap-x-3
    gap-y-14
    md:flex-row
    justify-between 
    my-20 
  `}
`;

export const Description = styled.div`
  ${tw`
    md:w-1/2
    flex 
    flex-col 
    gap-y-12
  `}
`;

export const Title = styled.p`
  ${tw`
    md:w-1/2
    text-3xl 
    font-bold
    dark:text-accent
  `}
`;

export const Socmed = styled.div`
  ${tw`
    flex 
    flex-col
    gap-y-6
  `}
`;

export const SocmedHeader = styled.p`
  ${tw`
    text-xl 
    font-bold 
    dark:text-accent
  `}
`;

export const SocmedList = styled.ul`
  ${tw`
    flex 
    gap-x-4
  `}
`;

export const ListItem = styled.li`
  ${tw`
    text-sm 
    dark:text-white
  `}
`;
