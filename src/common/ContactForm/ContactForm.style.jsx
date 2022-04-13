import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const ContactWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    md:flex-row 
    py-10 
    justify-between 
    gap-y-10
  `}
`;

export const SideHeader = styled.div`
  ${tw`
    flex 
    flex-col  
    gap-y-5
    md:w-1/4 
  `}
`;

export const Title = styled.div`
  ${tw`
    text-3xl 
    font-bold
    dark:text-accent
  `}
`;

export const Description = styled.div`
  ${tw`
    dark:text-white
  `}
`;

export const Form = styled.form`
  ${tw`
    md:w-2/3 
    flex 
    flex-col 
    gap-y-10
  `}

  button{
    ${tw`
      self-start
    `}
  }
`;

export const FormSection = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-4 
    relative
  `}
`;

export const FormDescription = styled.div`
  ${tw`
    dark:text-accent
  `}
`;

export const Information = styled.div`
  ${tw`
    flex  
    flex-wrap
    gap-5
  `}
`;

export const InputField = styled.div`
  ${tw`
    relative
  `}

  input{
    ${tw`
      border
      border-black 
      py-4 
      px-5
      text-sm 
      outline-none 
      bg-transparent 
      dark:border-white 
      dark:text-white
    `}
  }
`;

export const Message = styled.div`
  ${tw`
    flex 
    flex-col 
    relative
  `}
`;

export const Textarea = styled.textarea`
  ${tw`
    border 
    border-black
    py-4 
    px-5 
    h-[200px]
    min-h-[100px]
    max-h-[200px] 
    outline-none 
    bg-transparent 
    dark:border-white
    dark:text-white
  `}
`;

export const ErrorMessage = styled.div`
  ${tw`
    text-accent 
    text-sm  
    mt-1 
    absolute  
    right-0
    top-full 
    font-semibold
  `}
`;

export const FormActions = styled.div`
  ${tw`
    flex  
    items-center
    gap-x-2 
  `}

  p{
    ${tw` 
      mt-2 
      dark:text-white
    `}
  }
`;
