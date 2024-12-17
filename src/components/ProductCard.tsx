import { useState } from 'react';
import { Wrapper } from '../Wrappers/ProductCard';
import img from '../assets/images/seitan-1.jpg';
import { addItem, removeItem } from '../features/cart/cartSlice';
import { useAppDispatch } from '../hooks/store';
import { CartItem } from '../utils/types';

interface CardProps {
  item: {
    title: string;
    price: number;
    _id: string;
  };
}

const ProductCard: React.FC<CardProps> = ({ item }) => {
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useAppDispatch();

  const cartProduct: CartItem = {
    title: item.title,
    price: item.price,
    productID: item._id,
    amount,
  };

  const addToCart = () => {
    setAmount((prev) => prev + 1);
    dispatch(addItem(cartProduct));
  };

  const removeToCart = () => {
    setAmount((prev) => (prev > 0 ? prev - 1 : 0));
    dispatch(removeItem(item._id));
  };

  return (
    <Wrapper>
      <div className='product-card'>
        <div className='product-info'>
          <h2>{item.title}</h2>
          <p className='product-description'>Producto alimenticio elaborado principalmente a partir de gluten de trigo...</p>
          <p className='product-price'>{item.price}</p>
        </div>
        <div className='img-container'>
          <img src={img} alt='Seitan Tradicional' className='product-image' />
          {amount === 0 ? (
            <button className='btn-product' onClick={addToCart}>
              +
            </button>
          ) : (
            <div className='action-buttons '>
              <button className='decrement-button' onClick={removeToCart}>
                🗑️
              </button>
              <span className='quantity'>{amount}</span>
              <button className='increment-button' onClick={addToCart}>
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
