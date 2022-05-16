import React from 'react';
import { Routes as ReactRouter, Route } from 'react-router-dom';
import About from './pages/About/About';
import Faq from './pages/Faq/Faq';
import Home from './pages/Home/Home';
import OurTeam from './pages/OurTeam/OurTeam';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails/PortfolioDetails';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import { isNotEmpty } from './util/isNotEmpty';
import NotFound from './pages/NotFound/NotFound';

const routes = [
  { path: '/about', el: About },
  { path: '/faq', el: Faq },
  { path: '/', el: Home },
  { path: '/our-team', el: OurTeam },
  { path: '/portfolio', el: Portfolio },
  { path: '/portfolio/:portfolioId', el: PortfolioDetails },
  { path: '/contact', el: Contact },
  { path: '/services', el: Services },
  { path: '*', el: NotFound },
];

const Routes = () => {
  return (
    <ReactRouter>
      {isNotEmpty(routes) && routes.map(({ path, el: Item }) => {
        return (
          <Route
            element={<Item />}
            path={path}
            key={`router-link${path}`}
          />
        );
      })}
    </ReactRouter>
  );
};

export default Routes;
