import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  text-align: center;

  .error-img {
    height: 250px;
  }

  img {
    height: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-weight: 500;
  }

  @media (min-width: 720px) {
    height: 90vh;
    .error-img {
      height: 400px;
    }
  }
`;
