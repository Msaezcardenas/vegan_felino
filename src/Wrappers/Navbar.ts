import styled from 'styled-components';

export const Wrapper = styled.nav`
  height: var(--nav-height);
  background-color: var(--color-primary);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

  .links-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo con sombra */
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s ease, visibility 035s ease;
    z-index: 999; /* Colocar detrás del sidebar */
    overflow: hidden;
  }

  .links-container.open {
    opacity: 1;
    visibility: visible;
    overflow: hidden;
    pointer-events: all;
  }

  body.no-scroll {
    overflow: hidden; /* Evita el scroll */
  }

  .nav-links {
    position: fixed; /* Fijo en la pantalla */
    top: 0;
    left: 0;
    width: 70%; /* Ocupar todo el ancho */
    height: 100%; /* Ocupar todo el alto */
    right: -200px; /* Inicialmente oculta */
    width: 200px;
    height: 100%;
    background-color: #ffecb3; /* Fondo del menú */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra opcional */
    transform: translateX(-100%); /* Fuera de la pantalla inicialmente */
    transition: transform 0.3s ease-in-out; /* Animación suave */
    z-index: 1000; /* Por encima de otros elementos */
  }

  .nav-links.open {
    transform: translateX(0); /* Cuando está abierto */
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
    display: block; /* Mostrar el botón hamburguesa por defecto */
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
    width: 40px; /* Tamaño fijo */
    height: 16px; /* Tamaño fijo */
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
      /* background-color: #f2f2f2; */
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
      background-color: var(--color-secondary); /* Indicador para el enlace activo */
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
      background-color: var(--color-primary);
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
