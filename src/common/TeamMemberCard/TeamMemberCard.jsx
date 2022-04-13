import React from 'react';
import {
  CardWrapper,
} from './TeamMemberCard.style';
import { Image as CardImage, TeamInfo as CardInfo } from '../ListCard/ListCard';

const TeamMemberCard = ({ item }) => {
  const {
    name,
    role,
    imageUrl,
    socials,
  } = item;

  return (
    <CardWrapper>
      <CardImage
        ratio={8 / 9}
        imageUrl={imageUrl}
        alt={name}
      />

      <CardInfo
        socials={socials}
        name={name}
        role={role}
      />
    </CardWrapper>
  );
};

export default TeamMemberCard;
