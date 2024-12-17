import { links } from '../utils/links';
import { Wrapper } from '../Wrappers/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import cart from '../assets/images/cart.svg';
import { useAppSelector } from '../hooks/store';

export const Navbar = () => {
  const quantity = useAppSelector((state) => state.cartState.cartItems.length);
  console.log('_____-quantity:', quantity);

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
        <NavLink to='/carrito' className={({ isActive }) => (isActive ? 'cart active' : 'cart ')}>
          <span className='quantity'>{quantity}</span>
          <img src={cart} alt='Cart' />
        </NavLink>
      </div>
    </Wrapper>
  );
};
