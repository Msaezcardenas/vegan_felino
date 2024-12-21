import { useEffect, useRef } from 'react';
import { toggleStatusTab } from '../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { Wrapper } from '../Wrappers/Cart';
import img from '../assets/images/seitan-1.jpg';

const Carrito = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { statusTab, cartItems } = useAppSelector((state) => state.cartState);

  const dispatch = useAppDispatch();
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

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

  return (
    <Wrapper>
      <div id='sidebar' ref={sidebarRef} className={`sidebar ${statusTab ? 'open' : ''}`}>
        <div className='sidebar-content'>
          <h1>Carrito</h1>
          {cartItems.map((item) => (
            <div className='cart-item'>
              <div className='cart-img'>
                <img src={img} alt='Seitan Tradicional' className='product-image' />
              </div>
              <div className='cart-info'>
                <h2>{item.title}</h2>
                <h2>Precio: ${item.price}</h2>
                <p> Cantidad: {item.amount}</p>
              </div>
            </div>
          ))}
          {/* <button id='closeButton' className='close-button' onClick={handleOpenTabCart}>
            Cerrar
          </button> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Carrito;
