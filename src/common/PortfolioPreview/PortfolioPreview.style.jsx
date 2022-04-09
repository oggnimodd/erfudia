import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const PreviewWrapper = styled(Wrapper)`
  ${tw`
    flex
    flex-col
    w-full
    items-center
    py-20
  `}

  .my-masonry-grid {
      ${tw`
        flex 
        ml-[-20px]  
        md:ml-[-70px] 
        w-[calc(100% + 20px)]
        md:w-[calc(100% + 70px)]
      `}
    }
    .my-masonry-grid_column {
      ${tw`
        pl-[20px]
        md:pl-[70px]
        bg-clip-padding
      `}
    }
    /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
      ${tw`
        mb-[20px]
        md:mb-[70px]
      `}
    }
`;

export const PreviewHeader = styled.div`
  ${tw`
    flex
    flex-col
    gap-y-3
  `}
`;

export const Subtitle = styled.div`
  ${tw`
    dark:text-white
  `}
`;

export const Title = styled.div`
  ${tw`
    text-3xl 
    font-bold
    sm:max-w-[50%]
    dark:text-accent
  `}
`;

export const HeaderLink = styled.div`
  ${tw`
    font-semibold
    border-b
    border-black
    self-start
    dark:(text-white border-white)
  `}
`;

export const Card = styled.div`
  ${tw`
    flex 
    flex-col
    gap-y-3
  `}
`;

export const CardImage = styled.img`
  ${tw` 
    w-full
  `}
`;

export const CardTitle = styled.div`
  ${tw`
    text-2xl 
    font-bold
    dark:text-accent
  `}
`;

export const CardCategory = styled(Subtitle)``;
