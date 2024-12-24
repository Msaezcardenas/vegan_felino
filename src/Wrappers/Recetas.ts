import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  padding: 2rem;
  margin-bottom: 2rem;

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .recetas-container {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8rem;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
  }

  h1::after,
  h1::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 3px;
    background-color: var(--color-secondary);
    top: 0.6em;
    transition: all 0.2s ease-in;
  }

  h1::before {
    left: -160px;
  }

  h1::after {
    right: -160px;
  }

  h1:hover::after,
  h1:hover::before {
    width: 100px;
  }
`;
