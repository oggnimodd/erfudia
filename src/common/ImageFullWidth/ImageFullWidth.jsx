import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { useMediaQuery } from 'react-responsive';
import { Image } from './ImageFullWidth.style';
import { breakpoints } from '../../config/breakpoints';

const { md } = breakpoints;

const ImageFullWidth = ({
  src, title, ratio, ...rest
}) => {
  const isMedium = useMediaQuery({ query: `(min-width: ${md}px)` });

  if(!ratio) {
    ratio = isMedium ? 2 / 0.9 : 2 / 1.2;
  }

  return (
    <AspectRatio.Root ratio={ratio}>
      <Image
        {...rest}
        src={src}
        alt={title}
      />
    </AspectRatio.Root>
  );
};

export default ImageFullWidth;
