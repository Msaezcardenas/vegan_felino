import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  min-height: 100vh;
  margin-bottom: 4rem;

  .product-detail {
    display: flex;
    flex-direction: column;
  }

  .container-img {
    height: 300px;
    border-radius: 15px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  .detail {
    padding: 2rem 1rem;
  }

  h1 {
    color: var(--color-secondary);
    font-size: 34px;
    font-weight: 500;
    letter-spacing: var(--letter-spacing);
  }

  p {
    padding: 1rem 0;
    font-size: 22px;
    letter-spacing: var(--letter-spacing);
    color: var(--grey-800);
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
    color: var(--grey-800);
  }

  .handle-cart {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .action-buttons {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    justify-content: space-between;
    width: 130px;
  }

  .increment-button,
  .decrement-button {
    background: #fff;
    border: 0;
    border-radius: 50%;
    width: 38px;
    height: 38px;
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

  @media (min-width: 992px) {
    padding: 2rem;
    min-height: 50vh;
    .product-detail {
      display: grid;
      min-height: 100vh;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    h1 {
      font-size: 36px;
    }

    .container-img {
      height: 400px;
      border-radius: 15px;
    }
    .detail {
      padding: 2rem;
    }
  }
`;
