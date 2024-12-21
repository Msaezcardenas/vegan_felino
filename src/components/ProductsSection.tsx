import ProductCard from './ProductCard';
import { Wrapper } from '../Wrappers/ProductsSection';
import { useLoaderData } from 'react-router-dom';
import { ProductsResponse } from '../utils/types';

const ProductsSection = () => {
  const { data } = useLoaderData() as ProductsResponse;

  if (!data || data.length === 0) {
    return <h2>No hay datos disponibles.</h2>;
  }

  return (
    <Wrapper>
      <div className='title'>
        <h1> Productos</h1>
      </div>

      <div className='cards-container'>
        {data.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProductsSection;
