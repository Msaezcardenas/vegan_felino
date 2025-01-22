import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Carrito from './Carrito';
import { Wrapper } from '../Wrappers/HomeLayout';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <Wrapper>
      <Navbar />
      <div className='main-content'>{isPageLoading ? <Loading /> : <Outlet />}</div>
      <Carrito />
      <Footer />
    </Wrapper>
  );
};

export default HomeLayout;
