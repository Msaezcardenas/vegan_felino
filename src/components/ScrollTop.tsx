import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Restaura el scroll a la parte superior
  }, [pathname]);
};
