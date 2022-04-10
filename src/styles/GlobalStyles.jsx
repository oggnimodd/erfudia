import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import useThemeStore from '../store/useThemeStore';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased
      font-primary
    `}


    ${({ theme }) => (
    theme === 'dark'
      ? tw`
        bg-primary
      `
      : tw`
        bg-white
      `)}
  }
`;

const GlobalStyles = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <BaseStyles />
      <CustomStyles theme={theme} />
    </>
  );
};

export default GlobalStyles;
