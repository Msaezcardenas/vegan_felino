import { links } from '../utils/links';
import { Wrapper } from '../Wrappers/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <NavLink to='/'>
          <Logo />
        </NavLink>
        <ul>
          {links.map((item) => (
            <li>
              <NavLink to={item.href} className={({ isActive }) => (isActive ? 'active' : '')}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to='/carrito'>🛒</NavLink>
      </div>
    </Wrapper>
  );
};
