import styled from 'styled-components';

export const Wrapper = styled.div`
  .ingredientes {
    padding: 2rem 0;
  }
  h3 {
    font-weight: 500;
  }

  .list-ingredientes {
    padding: 1rem 0;
    list-style: disc; /* Aplica el estilo de lista con círculos */
    color: black;
    list-style-position: inside;
    letter-spacing: var(--letter-spacing);
    li {
      padding: 0.3rem 0;
    }
  }

  @media (min-width: 992px) {
  }
`;
