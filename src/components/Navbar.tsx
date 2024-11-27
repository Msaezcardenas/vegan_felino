import { links } from '../utils/links';
import { Wrapper } from '../Wrappers/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import cart from '../assets/images/cart.svg';

export const Navbar = () => {
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
          <img src={cart} alt='Cart' />
        </NavLink>
      </div>
    </Wrapper>
  );
};
