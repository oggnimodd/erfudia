import tw, { styled } from 'twin.macro';
import Button from '../Button/Button';

export const FormWrapper = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-3
  `}

  label{
    ${tw`
      hidden
    `}
  }
`;

export const Header = styled.p`
  ${tw`
    text-xl 
    font-bold
    dark:text-accent
  `}
`;

export const FieldWrapper = styled.div`
  ${tw`
    w-full
    md:w-2/3
    relative
  `}

  input{
    ${tw`
      border
      border-black
      pl-3
      pr-16
      py-3 
      text-lg
      outline-none 
      w-full
      bg-transparent 
      dark:(border-accent text-white)
    `}
  }
`;

export const SubmitButton = styled.button`
  ${tw`
    absolute 
    top-0 
    right-0
    text-2xl 
    h-full 
    flex 
    items-center 
    px-4 
    opacity-70 
    dark:text-accent
  `}
`;

export const FormMessage = styled.p`
  ${tw`
    mt-1
    dark:text-white
  `}
`;
