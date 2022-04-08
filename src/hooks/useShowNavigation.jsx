import { useState, useEffect } from 'react';
import { breakpoints } from '../config/breakpoints';

const useShowNavigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  useEffect(() => {
    const closeNavigation = () => {
      if(window.innerWidth >= breakpoints.lg) {
        setShowNavigation(false);
      }
    };
    window.addEventListener('resize', closeNavigation);

    closeNavigation();
    return () => {
      window.removeEventListener('resize', closeNavigation);
    };
  }, []);

  return { showNavigation, toggleNavigation };
};

export default useShowNavigation;
