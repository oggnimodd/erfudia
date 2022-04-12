import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import {
  CardWrapper,
  CardImage,
  CardInfo,
  Description,
  Name,
  Role,
} from './TeamMemberCard.style';
import Socmed from '../Socmed/Socmed';

const TeamMemberCard = ({ item }) => {
  const {
    name,
    role,
    imageUrl,
    socials,
  } = item;

  return (
    <CardWrapper>
      <AspectRatio.Root ratio={8 / 9}>
        <CardImage
          src={imageUrl}
          alt={name}
        />
      </AspectRatio.Root>
      <CardInfo>
        <Socmed socmedLinks={socials} />
        <Description>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </Description>
      </CardInfo>
    </CardWrapper>
  );
};

export default TeamMemberCard;
