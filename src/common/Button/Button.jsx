import React from 'react';
import { VscArrowRight as ArrowRight } from 'react-icons/vsc';
import ButtonStyle, { Icon } from './Button.style';

const Button = ({ children }) => {
  return (
    <ButtonStyle>
      {children}
      <Icon>
        <ArrowRight />
      </Icon>
    </ButtonStyle>
  );
};

export default Button;
