import { Wrapper } from '../Wrappers/ProductCard';
import img from '../assets/images/seitan-1.jpg';

interface CardProps {
  item: {
    title: string;
  };
}

const ProductCard: React.FC<CardProps> = ({ item }) => {
  return (
    <Wrapper>
      <div className='product-card'>
        <div className='product-info'>
          <h2>{item.title}</h2>
          <p className='product-description'>Producto alimenticio elaborado principalmente a partir de gluten de trigo...</p>
          <p className='product-price'>Precio: $ 8.600</p>
        </div>
        <div className='img-container'>
          <img src={img} alt='Seitan Tradicional' className='product-image' />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
