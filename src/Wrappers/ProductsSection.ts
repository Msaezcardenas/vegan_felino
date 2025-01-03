import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  margin-bottom: 7rem;

  .title {
    padding: 4rem 0;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    position: relative;
    display: inline-block;
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

  .cards-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
  }

  @media (min-width: 992px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
