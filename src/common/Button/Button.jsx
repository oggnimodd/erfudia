import React from 'react';
import { VscArrowRight as ArrowRight } from 'react-icons/vsc';
import ButtonStyle, { Icon } from './Button.style';

const Button = ({ children, light, ...rest }) => {
  return (
    <ButtonStyle
      light={light}
      {...rest}
    >
      {children}
      <Icon>
        <ArrowRight />
      </Icon>
    </ButtonStyle>
  );
};

export default Button;
