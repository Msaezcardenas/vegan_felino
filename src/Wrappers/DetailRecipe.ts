import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  .detail-recipe {
    height: 100%;
    margin-bottom: 3rem;
  }
  .img-container {
    width: 100%;
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .recipe-section {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-recipe {
    padding: 4rem 6rem;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    width: 60%;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  h1 {
    font-size: 40px;
    color: var(--color-secondary);
  }

  h3 {
    font-size: 26px;
    color: var(--color-primary);
  }
  li {
    font-size: 20px;
  }
`;
