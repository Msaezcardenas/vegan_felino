import { links } from '../utils/links';
import { Wrapper } from '../Wrappers/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import cart from '../assets/images/cart.svg';
import { toggleStatusTab } from '../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/store';

export const Navbar = () => {
  const { numItemsInCart } = useAppSelector((state) => state.cartState);

  const dispatch = useAppDispatch();
  const handleOpenTabCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Detiene la propagación del evento
    dispatch(toggleStatusTab());
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <NavLink to='/'>
          <Logo />
        </NavLink>
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <NavLink to={item.href} className={({ isActive }) => (isActive ? 'active' : '')}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button type='button' className={`${numItemsInCart > 0 ? 'cart active' : 'cart'}`} onClick={handleOpenTabCart}>
          <div className='cart-counter'>
            <span className='quantity'>{numItemsInCart > 0 ? numItemsInCart : ''}</span>
            <img src={cart} alt='Cart' />
          </div>
        </button>
      </div>
    </Wrapper>
  );
};
