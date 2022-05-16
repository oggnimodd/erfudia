import tw, { styled } from 'twin.macro';
import Link from '../Link/Link';

export const PaginationWrapper = styled.div`
  ${tw`
    flex 
    justify-between
    py-5
    mb-16 
    relative
  `}
`;

export const NavigationButton = styled(Link)`
  ${tw`
    text-sm
    md:text-2xl 
    text-black 
    dark:text-white 
    flex 
    items-center 
    gap-x-3
  `}
`;

export const PortfolioListLink = styled(Link)`
  ${tw`
    absolute 
    left-1/2 
    -translate-x-1/2 
    text-accent 
    uppercase 
    font-bold
  `}
`;
