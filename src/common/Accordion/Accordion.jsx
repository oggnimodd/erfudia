import React from 'react';
import short from 'short-uuid';
import {
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai';
import {
  AccordionWrapper,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from './Accordion.style';
import { isNotEmpty } from '../../util/isNotEmpty';
import { faqs } from '../../data/faqs';

const Accordion = () => {
  return (
    <AccordionWrapper
      type="single"
      collapsible
    >
      {
        isNotEmpty(faqs) && faqs.map((item, id) => {
          return (
            <AccordionItem
              value={`value-${id}`}
              key={short.generate()}
            >
              <AccordionHeader>
                <AccordionTrigger>
                  <AiOutlinePlus className="plus-sign" />
                  <AiOutlineMinus className="minus-sign" />
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionHeader>
            </AccordionItem>
          );
        })
      }
    </AccordionWrapper>
  );
};

export default Accordion;
