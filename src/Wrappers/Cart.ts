import styled from 'styled-components';

export const Wrapper = styled.div`
  .sidebar-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 50px 16px;
    h1 {
      font-size: 24px;
    }
    /* border-bottom: 1px solid #ccc; */
  }
  .close-button {
    position: fixed;
    display: flex;
    background: none;
    border: none;
    align-items: center;
    border-radius: 50%;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
    color: var(--black);
    transition: color 0.2s ease;
    right: 0;
    top: 0;
    padding: 10px;
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo con sombra */
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    z-index: 999; /* Colocar detrás del sidebar */
    overflow: hidden;
    /* pointer-events: none; */
  }
  .sidebar-overlay.open {
    opacity: 1;
    visibility: visible;
    overflow: hidden;
    pointer-events: all;
  }
  .sidebar {
    position: fixed;
    top: 0;
    right: -200px; /* Inicialmente oculta */
    width: 200px;
    height: 100%;
    background-color: var(--color-bg-light);
    box-shadow: var(--shadow-1);
    transition: right 0.8s ease;
    z-index: 1000;
    overflow-y: auto;
  }

  .sidebar-content {
    text-align: center;
    padding: 20px;
    overflow-y: auto;
  }

  .sidebar-content::-webkit-scrollbar {
    width: 8px;
  }

  .sidebar-content::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  .sidebar-content::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  .sidebar.open {
    right: 0; /* Se muestra */
    transform: translateX(0);
  }

  .cart-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    box-shadow: var(--shadow-1);
    text-align: start;
    border-bottom: 1px solid var(--grey-300);
  }

  .cart-info {
    flex: 1; /* El contenido toma todo el espacio disponible */
    margin-left: 20px;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
  }

  .quantity-controls button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 20px;
    color: #333;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .quantity-controls button:disabled {
    color: #aaa;
    cursor: not-allowed;
  }

  .quantity-controls button:hover:not(:disabled) {
    /* background-color: #f0f0f0; */
    /* border-color: #333; */
  }

  .quantity-controls span {
    font-size: 16px;
    font-weight: bold;
    width: 30px;
    text-align: center;
  }

  .cart-img {
    img {
      width: 80px;
      height: 80px;
      border-radius: 10%;
      object-fit: cover;
    }
  }

  @media (min-width: 992px) {
    position: fixed;
    top: 0;
    right: -600px; /* Inicialmente oculta */
    width: 600px;
    height: 100%;
    background-color: var(--color-bg-light);
    box-shadow: var(--shadow-1);
    transition: right 0.8s ease;
    z-index: 1000;
    overflow-y: auto;
  }

  .sidebar-content {
    text-align: center;
    padding: 10px;
    overflow-y: auto;
  }

  /* .close-button {
    position: fixed;
    display: flex;
    background: none;
    border: none;
    align-items: center;
    border-radius: 50%;
    font-size: 30px;
    font-weight: 500;
    padding: 1rem 1.3rem;
    cursor: pointer;
    color: var(--black);
    transition: color 0.2s ease;
    right: 0;
    top: 0;
    padding: 1rem;
  } */
`;
