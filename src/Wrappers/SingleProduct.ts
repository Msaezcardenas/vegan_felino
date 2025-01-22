import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: var(--nav-height);
  height: 100vh;

  .product-detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .container-img {
    height: 400px;
    border-radius: 15px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  .detail {
    padding: 2rem;
  }

  h1 {
    color: var(--color-secondary);
    font-size: 36px;
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
`;
