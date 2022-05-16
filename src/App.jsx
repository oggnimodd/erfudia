import React from 'react';
import Routes from './Routes';
import Header from './layout/Header/Header';
import { AppWrapper } from './App.style';
import useThemeStore from './store/useThemeStore';
import useColorSchemeStore from './store/useColorSchemeStore';
import Footer from './layout/Footer/Footer';
import ColorSchemePicker from './common/ColorSchemePicker/ColorSchemePicker';

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  const colorScheme = useColorSchemeStore((state) => state.colorScheme);

  return (
    <AppWrapper
      id="app"
      className={`${theme} ${colorScheme}`}
    >
      <ColorSchemePicker />
      <Header />
      <Routes />
      <Footer />
    </AppWrapper>
  );
};

export default App;
