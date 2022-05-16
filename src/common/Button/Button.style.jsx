import tw, { styled } from 'twin.macro';

export default styled.button`
  ${tw`
    px-5
    py-3 
    flex 
    justify-between    
    bg-primary
    text-white
    font-semibold
    items-center 
    border 
    border-primary
    hover:(bg-white text-black)
    dark:(bg-accent text-primary border-accent)
    dark:hover:(bg-primary text-accent)
  
    transition-all
    ease-in-out 
    duration-300
  `}


  ${({ light }) => light && tw`
    bg-white 
    text-primary 
    border-transparent
    hover:(border-white bg-transparent text-white)
    dark:hover:(bg-transparent text-white border-white)
  `}
`;

export const Icon = styled.div`
  ${tw`
    w-10
    flex
    items-center 
    justify-end
    text-xl
  `}
`;
