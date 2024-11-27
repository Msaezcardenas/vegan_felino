import styled from 'styled-components';

export const Wrapper = styled.div`
  /* src/styles/ProductCard.css */
  .product-card {
    display: flex;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .product-image {
    width: 150px;
    height: 100%;
  }

  .product-info {
    padding: 20px;
    margin-left: 20px;
  }

  .product-info h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .product-description {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
  }

  .product-price {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
