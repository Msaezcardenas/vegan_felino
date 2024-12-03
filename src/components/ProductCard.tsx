import { useState } from 'react';
import { Wrapper } from '../Wrappers/ProductCard';
import img from '../assets/images/seitan-1.jpg';

interface CardProps {
  item: {
    title: string;
  };
}

const ProductCard: React.FC<CardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

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
          {quantity === 0 ? (
            <button className='btn-product' onClick={handleIncrement}>
              +
            </button>
          ) : (
            <div className='action-buttons '>
              <button className='decrement-button' onClick={handleDecrement}>
                🗑️
              </button>
              <span className='quantity'>{quantity}</span>
              <button className='increment-button' onClick={handleIncrement}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
