import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import {
  CardImage,
  CardInfo,
  Description,
  Name,
  Role,
} from './ListCard.style';
import Socmed from '../Socmed/Socmed';

export const Image = ({ imageUrl, name, ratio }) => {
  return (
    <AspectRatio.Root ratio={ratio}>
      <CardImage
        src={imageUrl}
        alt={name}
      />
    </AspectRatio.Root>
  );
};

export const TeamInfo = ({ name, socials, role }) => {
  return (
    <CardInfo>
      <Socmed socmedLinks={socials} />
      <Description>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Description>
    </CardInfo>
  );
};

export const ProjectInfo = ({ title, category }) => {
  return (
    <CardInfo>
      <Description>
        <Name>{title}</Name>
        <Role>{category}</Role>
      </Description>
    </CardInfo>
  );
};
