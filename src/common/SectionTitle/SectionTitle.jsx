import React from 'react';
import { StyledTitle } from './SectionTitle.style';

const SectionTitle = ({ children }) => {
  return (
    <StyledTitle>{children}</StyledTitle>
  );
};

export default SectionTitle;
