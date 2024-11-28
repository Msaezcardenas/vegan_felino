import styled from 'styled-components';

export const Wrapper = styled.div`
  /* src/styles/ProductCard.css */
  .product-card {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 600px;
  }

  .img-container {
    object-fit: cover;
    height: 250px;
    width: 100%;
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    padding: 30px 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .product-info h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .product-description {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
  }

  .product-price {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
