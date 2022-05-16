import tw, { styled } from 'twin.macro';

export const ListWrapper = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    items-center 
    mb-10
  `}

  .my-masonry-grid {
    ${tw`
      flex 
      ml-[-20px]  
      md:ml-[-40px] 
      w-[calc(100% + 20px)]
      md:w-[calc(100% + 40px)]
    `}
  }

  .my-masonry-grid_column {
    ${tw`
      pl-[20px]
      md:pl-[40px]
      bg-clip-padding
    `}
  }

  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    ${tw`
      mb-[20px]
      md:mb-[40px]
    `}
  }
  
`;

export const Image = styled.img`
  ${tw`
    w-full 
    mb-10
  `}
`;
