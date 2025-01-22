import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrappers/ProductCard';
import { addItem, removeItem } from '../features/cart/cartSlice';
import { CartItem } from '../utils/types';
import { formatAmountRegex } from '../utils/formatAmount';
import { useAppDispatch, useAppSelector } from '../store';

interface CardProps {
  item: {
    title: string;
    price: number;
    _id: string;
    description: string;
    image: string;
    totalPrice: number;
  };
}

const ProductCard: React.FC<CardProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  console.log(item);

  const cartItem = useAppSelector((state) => state.cartState.cartItems.find((product) => product.productID === item._id));
  const amount = cartItem ? cartItem.amount : 0;

  const cartProduct: CartItem = {
    title: item.title,
    price: item.price,
    description: item.description,
    productID: item._id,
    amount,
    totalPriceItem: item.totalPrice,
    image: item.image,
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
        <Link to={`/tienda/${item._id}`} key={item._id}>
          <div className='product-info'>
            <h2>{item.title}</h2>
            <p className='product-description'>{item.description}</p>
            <p className='product-price'>${formatAmountRegex(item.price)}</p>
          </div>
        </Link>
        <div className='img-container'>
          <img src={`https://backend-ecommerce-production-4fe0.up.railway.app${item.image}`} alt='Seitan Tradicional' className='product-image' />
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
