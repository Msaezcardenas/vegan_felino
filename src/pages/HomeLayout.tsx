import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Carrito from './Carrito';
import { useEffect } from 'react';
import { Wrapper } from '../Wrappers/HomeLayout';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Wrapper>
      <Navbar />
      <main>{isPageLoading ? <Loading /> : <Outlet />}</main>
      <Carrito />
      <Footer />
    </Wrapper>
  );
};

export default HomeLayout;
