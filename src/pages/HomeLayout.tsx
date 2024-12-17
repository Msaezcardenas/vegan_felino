import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Navbar />
      <main className='align-element py-20'>{isPageLoading ? <Loading /> : <Outlet />}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
