import React from 'react';
import ReactMarquee from 'react-fast-marquee';
import { MarqueeWrapper, TextWrapper, Square } from './Marquee.style';

const Marquee = ({ cloneCount = 20, text = 'Lorem Ipsum' }) => {
  const items = Array.from(Array(cloneCount).keys());

  return (
    <MarqueeWrapper>
      <ReactMarquee
        gradient={false}
        speed={50}
      >
        {
          items.map(() => {
            return (
              <TextWrapper>
                <Square />
                {text}
              </TextWrapper>
            );
          })
        }

      </ReactMarquee>
    </MarqueeWrapper>
  );
};

export default Marquee;
