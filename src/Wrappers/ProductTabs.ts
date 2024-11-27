import styled from 'styled-components';

export const Wrapper = styled.div`
  .product-tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .product-tab {
    padding: 10px 20px;
    background-color: #f89a0b;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  .product-tab.active {
    background-color: #d8790b;
  }
`;
