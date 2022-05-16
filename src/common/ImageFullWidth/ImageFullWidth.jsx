import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Image } from './ImageFullWidth.style';

const ImageFullWidth = ({
  src, title, ratio = 2 / 0.9, ...rest
}) => {
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
