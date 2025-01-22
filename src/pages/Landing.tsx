import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';
import { Wrapper } from '../Wrappers/Landing';
import { LoaderFunction } from 'react-router-dom';
import { customFetch } from '../utils/customFetch';
import { ProductsResponse } from '../utils/types';
const url = '/products';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  try {
    const response = await customFetch<ProductsResponse>(url);
    return { ...response.data };
  } catch (error) {
    console.log(error);
    throw new Response('Error loading data', { status: 500 });
  }
};

const Landing = () => {
  return (
    <Wrapper>
      <Banner />
      <ProductsSection />
    </Wrapper>
  );
};

export default Landing;
