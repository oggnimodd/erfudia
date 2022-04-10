import React from 'react';
import Routes from './Routes';
import Header from './layout/Header/Header';
import { AppWrapper } from './App.style';
import useThemeStore from './store/useThemeStore';

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <AppWrapper
      id="app"
      className={theme}
    >
      <Header />
      <Routes />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </AppWrapper>
  );
};

export default App;
