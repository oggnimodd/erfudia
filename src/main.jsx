import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

// Color schemes
import './color-schemes/color-schemes.css';

// Swiper react styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
