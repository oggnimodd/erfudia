import React from 'react';
import Routes from './Routes';
import Header from './layout/Header/Header';
import { AppWrapper } from './App.style';

const App = () => {
  return (
    <div
      id="app"
      className="dark"
    >
      <AppWrapper>
        <Header />
        <Routes />
      </AppWrapper>
    </div>
  );
};

export default App;
