import styled from 'styled-components';

export const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    right: -600px; /* Inicialmente oculta */
    width: 600px;
    height: 100%;
    background-color: var(--color-bg-light);
    box-shadow: var(--shadow-1);
    transition: right 0.8s ease;
    z-index: 1000;
  }

  .sidebar-content {
    text-align: center;
    padding: 20px;
  }

  .sidebar.open {
    right: 0; /* Se muestra */
  }

  .close-button {
    background-color: #000;
    color: #ffd700;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  .cart-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    box-shadow: var(--shadow-1);
    text-align: start;
  }

  .cart-img {
    img {
      width: 100px;
      object-fit: cover;
    }
  }
`;
