import styled from 'styled-components';

export const Wrapper = styled.div`
  /* src/styles/ProductCard.css */
  .product-card {
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    height: 300px;
  }

  .img-container {
    object-fit: cover;
    width: 100%;
    position: relative;
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    padding: 1.5rem 0.8rem;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .product-info h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .product-description {
    font-size: 12px;
    color: #666;
    margin-bottom: 15px;
  }

  .product-price {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .btn-product {
    height: 50px;
    font-size: 1.7rem;
    color: black;
    width: 50px;
    border-radius: 50%;
    border: 0;
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: white;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .btn-product:hover {
    transform: scale(1.1);
    background: #f0f0f0;
  }

  .action-buttons {
    position: absolute;
    bottom: 10px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: white;
    padding: 5px 5px;
    border-radius: 10px;
    justify-content: space-between;
    width: 95px;
  }

  .hidden {
    display: none;
  }

  .increment-button,
  .decrement-button {
    background: #fff;
    border: 0;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .increment-button:hover,
  .decrement-button:hover {
    transform: scale(1.1);
    background: #f0f0f0;
  }

  .quantity {
    font-size: 16px;
    font-weight: bold;
  }
  @media (min-width: 720px) {
    .product-card {
      height: 280px;
    }
  }

  @media (min-width: 992px) {
    .product-card {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 500px;
      height: auto;
    }

    .product-info {
      margin-left: 12px;
    }

    .img-container {
      height: 250px;
    }

    .product-info h2 {
      font-size: 1.5rem;
    }

    .product-description {
      font-size: 14px;
    }

    .btn-product {
      right: 10px;
      bottom: 10px;
    }

    .action-buttons {
      bottom: 10px;
      right: 10px;
      padding: 5px 10px;
      width: 50%;
    }

    .increment-button,
    .decrement-button {
      width: 30px;
      height: 30px;
    }
  }
`;
