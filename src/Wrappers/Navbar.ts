import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: sticky;
  height: var(--nav-height);
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  z-index: 3;
  background-color: var(--color-bg-light);

  .links-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s ease, visibility 035s ease;
    z-index: 999;
    overflow: hidden;
  }

  .links-container.open {
    opacity: 1;
    visibility: visible;
    overflow: hidden;
    pointer-events: all;
  }

  body.no-scroll {
    overflow: hidden;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    right: -200px;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .nav-links.open {
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;
  }

  .nav-center {
    display: flex;
    width: 100%;
    padding: 0 12px;
    justify-content: space-between;
    img {
      width: 80px;
    }
  }

  .logo-mobile {
    display: flex;
    img {
      height: auto;
      width: 60px;
    }
  }
  .mobile-menu-btn {
    background-color: var(--color-primary);
    display: block;
    background: transparent;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;

    svg {
      width: 30px;
      height: auto;
    }
  }
  .login-cart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    svg {
      width: 30px;
      height: auto;
    }
  }

  .cart-counter {
    display: flex;
    align-items: center;
    width: 40px;
    height: 16px;
    .quantity {
      width: 10px;
    }
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 50%;
    transition: background-color 0.5s ease;
    background: none;
    margin-left: 4px;
    padding: 5px;
    svg {
      height: 80px;
    }
  }

  .cart img {
    width: 30px;
    margin: 0;
    height: auto;
  }

  .cart.active {
    background-color: var(--color-bg-light);
    box-shadow: var(--shadow-1);
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    width: 60%;
  }

  li {
    font-size: 1.125rem;
    position: relative;
    text-decoration: none;
    padding: 10px 5px;
    transition: color 0.3s ease;

    a {
      font-weight: 500;
      letter-spacing: var(--letter-spacing);
    }
    :hover {
      color: var(--color-secondary);
    }
    a.active {
      color: var(--color-secondary);
    }
    a.active::after {
      content: '';
      color: var(--color-secondary);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--color-secondary);
      transition: width 0.3s ease;
    }
  }

  button {
    cursor: pointer;
    background-color: var(--color-bg-light);
    border: none;
  }

  .btn-login {
    background: none;
  }

  @media (min-width: 992px) {
    .mobile-menu-btn {
      display: none;
    }

    .login-cart {
      width: 80px;
      justify-content: space-between;
    }

    .nav-center {
      img {
        width: 120px;
      }
    }

    .nav-links.open {
      display: none;
    }

    li {
      font-size: 1.3rem;
    }
    .nav-center {
      display: flex;
      width: 90vw;
      justify-content: space-between;
    }

    .links-container {
      display: flex;
      flex-direction: row;
      width: 60%;
      visibility: visible;
      opacity: 1;
      background-color: transparent;
      height: auto;
      position: relative;
      align-self: center;
    }
    .nav-links {
      display: flex;
      flex-direction: row;
      width: 100%;
      transform: translateX(0);
      height: auto;
      box-shadow: none;
      justify-content: space-evenly;
      position: relative;
      align-items: center;
      padding: 0;
    }
    .cart {
      height: 60px;
      margin-left: 20px;
      padding: 10px;
    }
  }
`;
