import React from 'react';
import Routes from './Routes';
import Header from './layout/Header/Header';
import { AppWrapper } from './App.style';
import useThemeStore from './store/useThemeStore';

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      id="app"
      className={theme}
    >
      <AppWrapper>
        <Header />
        <Routes />
      </AppWrapper>
    </div>
  );
};

export default App;
