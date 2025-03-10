import { useEffect, useRef } from 'react';
import { toggleStatusTab, addItem, removeItem, updateItemAmount } from '../features/cart/cartSlice';
import { Wrapper } from '../Wrappers/Cart';
import { PiXBold } from 'react-icons/pi';
import { CartItem } from '../utils/types';
import { formatAmountRegex } from '../utils/formatAmount';
import { useAppDispatch, useAppSelector } from '../store';

const Carrito = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const totalCart = useAppSelector((state) => state.cartState.totalCart);

  const { statusTab, cartItems, numItemsInCart } = useAppSelector((state) => state.cartState);

  const dispatch = useAppDispatch();
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  useEffect(() => {
    if (statusTab) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [statusTab]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && statusTab) {
        dispatch(toggleStatusTab());
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [statusTab, dispatch]);

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const removeToCart = (item: CartItem) => {
    if (item.amount === 1) {
      dispatch(updateItemAmount({ productID: item.productID, amount: 0 }));
      setTimeout(() => {
        dispatch(removeItem(item.productID));
        if (numItemsInCart === 1) dispatch(toggleStatusTab());
      }, 400);
    } else {
      dispatch(removeItem(item.productID));
    }
  };

  return (
    <Wrapper>
      <div className={`sidebar-overlay ${statusTab ? 'open' : ''}`}>
        <div id='sidebar' ref={sidebarRef} className={`sidebar ${statusTab ? 'open' : ''}`}>
          <div className='sidebar-content'>
            <div className='sidebar-header'>
              <h1>Tu Carrito</h1>
              <button onClick={handleOpenTabCart} className='close-button'>
                <PiXBold />
              </button>
            </div>
            {cartItems.map((item) => (
              <div className='cart' key={item.title}>
                <div className='cart-item'>
                  <div className='cart-img'>
                    <img src={`${import.meta.env.VITE_API_URL}${item.image}`} alt='Seitan Tradicional' className='product-image' />
                  </div>
                  <div className='cart-info'>
                    <h2>{item.title}</h2>
                    <div className='price'>
                      <div className='quantity-controls'>
                        <button onClick={() => removeToCart(item)}>-</button>
                        <span>{item.amount}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                      <h3>${formatAmountRegex(item.totalPriceItem)}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {numItemsInCart > 0 ? (
              <div className='payment'>
                <div className='total'>
                  <h2>Total:</h2>
                  <p>${formatAmountRegex(totalCart)}</p>
                </div>
                <button className='btn btn-pay'> Ir a Pagar </button>
              </div>
            ) : (
              <h3>El carrito esta vacio</h3>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Carrito;
