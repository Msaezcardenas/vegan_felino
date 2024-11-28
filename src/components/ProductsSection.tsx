import ProductCard from './ProductCard';
import { Wrapper } from '../Wrappers/ProductsSection';

const listProducts = [{ title: 'Seitan' }, { title: 'Tutitos' }, { title: 'Chorizos' }, { title: 'Falabel' }];

const ProductsSection = () => {
  return (
    <Wrapper>
      <h1> Productos</h1>

      <div className='cards-container'>
        {listProducts.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProductsSection;
