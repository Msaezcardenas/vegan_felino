import styled from 'styled-components';

export const Wrapper = styled.div`
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
`;
