import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrappers/ProductCard';
import img from '../assets/images/seitan-1.jpg';
import { addItem, removeItem } from '../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { CartItem } from '../utils/types';

interface CardProps {
  item: {
    title: string;
    price: number;
    _id: string;
  };
}

const ProductCard: React.FC<CardProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const cartItem = useAppSelector((state) => state.cartState.cartItems.find((product) => product.productID === item._id));
  const amount = cartItem ? cartItem.amount : 0;

  console.log(cartItem?.amount);

  const cartProduct: CartItem = {
    title: item.title,
    price: item.price,
    productID: item._id,
    amount,
  };

  const addToCart = () => {
    dispatch(addItem(cartProduct));
  };

  const removeToCart = () => {
    dispatch(removeItem(item._id));
  };

  return (
    <Wrapper>
      <div className='product-card'>
        <Link to={`/${item._id}`}>
          <div className='product-info'>
            <h2>{item.title}</h2>
            <p className='product-description'>Producto alimenticio elaborado principalmente a partir de gluten de trigo...</p>
            <p className='product-price'>${item.price}</p>
          </div>
        </Link>
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
