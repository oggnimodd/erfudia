import React from 'react';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import {
  SocmedWrapper,
  SocmedIcon,
} from './Socmed.style';

const icons = {
  instagram: AiOutlineInstagram,
  facebook: AiFillFacebook,
  twitter: AiFillTwitterSquare,
  pinterest: BsPinterest,
};

const Socmed = ({ socmedLinks }) => {
  return (
    <SocmedWrapper>
      {socmedLinks?.length > 0 && socmedLinks.map((item) => {
        const icon = icons[item.type];
        return (
          <SocmedIcon
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            key={`footer-link-${item.link}`}
          >
            {icon()}
          </SocmedIcon>
        );
      })}
    </SocmedWrapper>
  );
};

export default Socmed;
