import styled from 'styled-components';

export const Wrapper = styled.nav`
  height: var(--nav-height);
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

  .nav-center {
    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
    height: auto;
    margin-right: 0.5rem;
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 50%;
    transition: background-color 0.5s ease;
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
      font-weight: 400;
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

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 2;
    .nav-center {
      display: flex;
      width: 90vw;
      justify-content: space-between;
    }
  }
`;
