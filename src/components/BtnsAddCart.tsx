import { Wrapper } from '../Wrappers/BtnsAddCart.ts';

interface BtnsAddCartProps {
  amount: number;
  addToCart: () => void;
  removeToCart: () => void;
}

const BtnsAddCart: React.FC<BtnsAddCartProps> = ({ amount, addToCart, removeToCart }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default BtnsAddCart;
