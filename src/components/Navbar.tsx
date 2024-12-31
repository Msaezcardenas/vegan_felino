import { links } from '../utils/links';
import { Wrapper } from '../Wrappers/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { toggleStatusTab } from '../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { PiShoppingCartBold, PiUserBold } from 'react-icons/pi';
import { IoMenu } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';

export const Navbar = () => {
  const { numItemsInCart } = useAppSelector((state) => state.cartState);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const dispatch = useAppDispatch();
  const handleOpenTabCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Detiene la propagación del evento
    dispatch(toggleStatusTab());
  };

  const toggleMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
    console.log('toggleMenu:', !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    console.log('useEffect:', isMobileMenuOpen);

    const handleClickOutside = (event: MouseEvent) => {
      // Verifica si el clic ocurrió fuera del menú y si está abierto
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Agregar el evento sólo si el menú está abierto
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    // Elimina el evento al desmontar el componente o cerrar el menú
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Agregar o remover la clase `no-scroll` en el <body>
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll'); // Limpieza por seguridad
    };
  }, [isMobileMenuOpen]);

  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='mobile-menu-btn' onClick={toggleMobileMenu}>
          <IoMenu />
        </button>
        <NavLink to='/'>
          <Logo />
        </NavLink>

        <div className={`links-container ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul ref={menuRef} className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            {links.map((item, index) => (
              <li key={index}>
                <NavLink to={item.href} className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className='login-cart'>
          <NavLink className='btn-login' to='/Login'>
            <PiUserBold />
          </NavLink>

          <button type='button' className={`${numItemsInCart > 0 ? 'cart active' : 'cart'}`} onClick={handleOpenTabCart}>
            <div className='cart-counter'>
              <span className='quantity'>{numItemsInCart > 0 ? numItemsInCart : ''}</span>
              <PiShoppingCartBold />
            </div>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
