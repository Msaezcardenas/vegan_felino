import ProductCard from './ProductCard';
import { Wrapper } from '../Wrappers/ProductsSection';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils/customFetch';
import { ProductsResponse } from '../utils/types';

const listProducts = [{ title: 'Seitan' }, { title: 'Tutitos' }, { title: 'Chorizos' }, { title: 'Falabel' }];

const url = '/products';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);

  console.log(response);

  return { ...response.data };
};

const ProductsSection = () => {
  const { data: products } = useLoaderData() as ProductsResponse;
  console.log(products);

  return (
    <Wrapper>
      <div className='title'>
        <h1> Productos</h1>
      </div>

      <div className='cards-container'>
        {products.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProductsSection;
