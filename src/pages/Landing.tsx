import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ProductsSection from '../components/ProductsSection';
import { Wrapper } from '../Wrappers/Landing';

const Landing = () => {
  return (
    <Wrapper>
      <Banner />
      <ProductsSection />
      <Footer />
    </Wrapper>
  );
};

export default Landing;
