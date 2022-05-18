import React from 'react';
import {
  CardWrapper,
} from './TeamMemberCard.style';
import { Image as CardImage, TeamInfo as CardInfo } from '../ListCard/ListCard';

// NOTE : In real project, every member has different socmed account
const socials = [
  {
    link: 'https://www.instagram.com',
    type: 'instagram',
  },
  {
    link: 'https://www.facebook.com',
    type: 'facebook',
  },
  {
    link: 'https://www.twitter.com',
    type: 'twitter',
  },
  {
    link: 'https://www.pinterest.com',
    type: 'pinterest',
  },
];

const TeamMemberCard = ({ item }) => {
  const {
    name,
    role,
    image,
  } = item;

  return (
    <CardWrapper>
      <CardImage
        ratio={8 / 9}
        imageUrl={image}
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
