import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-bg-light);

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #a6d1bf;
    border-top: 5px solid var(--color-secondary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
