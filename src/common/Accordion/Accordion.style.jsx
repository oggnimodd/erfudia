import tw, { styled } from 'twin.macro';
import * as Accordion from '@radix-ui/react-accordion';

import { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`;

const slideUp = keyframes`
  from { height:var(--radix-accordion-content-height); }
  to { height: 0; }
`;

export const AccordionWrapper = styled(Accordion.Root)`
  ${tw`
    w-full
    md:w-1/2
  `}
`;

export const AccordionItem = styled(Accordion.Item)`
  ${tw`
    border-t 
    border-black
    dark:border-accent
  `}

  &:nth-last-of-type(1){
    ${tw`
      border-b
    `}
  }
`;

export const AccordionHeader = styled(Accordion.Header)`
  ${tw`
  `}
`;

export const AccordionTrigger = styled(Accordion.Trigger)`
  ${tw`
    text-lg 
    font-bold 
    text-left 
    flex
    py-10 
    select-none 
    items-center
    dark:text-accent 
    w-full
  `}

  svg{
    ${tw`
      text-2xl 
      mr-2
    `}
  }

  &[data-state="open"] .plus-sign{
    ${tw`
      hidden
    `}
  }
  
  &[data-state="closed"] .minus-sign{
    ${tw`
      hidden
    `}
  }
`;

export const AccordionContent = styled(Accordion.Content)`
  ${tw`
    overflow-hidden
  `}

  p{
    ${tw`
      mb-10
      dark:text-white
    `}
  }

  &[data-state="open"]{
    animation: ${slideDown} 400ms ease-in-out forwards;
    
  }
  
  &[data-state="closed"]{
    animation: ${slideUp} 400ms ease-in-out;
  }
`;
