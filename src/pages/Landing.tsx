import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';
import { Wrapper } from '../Wrappers/Landing';

const Landing = () => {
  return (
    <Wrapper>
      <Banner />
      <ProductsSection />
    </Wrapper>
  );
};

export default Landing;
