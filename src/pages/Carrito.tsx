import { useEffect, useRef } from 'react';
import { toggleStatusTab, addItem, removeItem, updateItemAmount } from '../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { Wrapper } from '../Wrappers/Cart';
import img from '../assets/images/seitan-1.jpg';
import { PiXBold } from 'react-icons/pi';
import { CartItem } from '../utils/types';

const Carrito = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  // const cartItem = useAppSelector((state) => state.cartState.cartItems.find((product) => product.productID === item._id));
  // const amount = cartItem ? cartItem.amount : 0;

  const { statusTab, cartItems, numItemsInCart } = useAppSelector((state) => state.cartState);

  const dispatch = useAppDispatch();
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  useEffect(() => {
    // Agregar o remover la clase `no-scroll` en el <body>
    if (statusTab) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll'); // Limpieza por seguridad
    };
  }, [statusTab]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        statusTab // Solo cierra si está abierto
      ) {
        dispatch(toggleStatusTab());
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside); // Limpieza del listener
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
              <div className='cart-item'>
                <div className='cart-img'>
                  <img src={img} alt='Seitan Tradicional' className='product-image' />
                </div>
                <div className='cart-info'>
                  <h3>{item.title}</h3>
                  <h2>Precio: ${item.price}</h2>
                  <p> Cantidad: {item.amount}</p>
                </div>
                <div className='quantity-controls'>
                  <button onClick={() => removeToCart(item)}>-</button>
                  <span>{item.amount}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Carrito;
