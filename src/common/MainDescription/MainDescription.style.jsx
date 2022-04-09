import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const MainDescriptionWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    items-center 
    justify-center
    lg:max-w-[60%]
    mx-auto
    pt-32
    pb-20
    gap-y-7
  `}
`;

export const Description = styled.p`
  ${tw`
    text-center
    text-lg
    sm:text-xl
    md:text-2xl 
    font-semibold
    dark:text-white
    uppercase
  `}
`;
