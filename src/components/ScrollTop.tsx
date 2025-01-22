import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Esto asegura que se haga scroll hasta la parte superior en cada cambio de ruta
    window.scrollTo(0, 0);
  }, [location]);

  return null; // No necesitas renderizar nada
};

export default ScrollToTop;
