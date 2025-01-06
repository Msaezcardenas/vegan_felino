import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  margin-bottom: 2rem;

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0.5rem;
  }

  .recetas-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
    padding: 0 16px; /* Añade un espacio interno (opcional) */
    box-sizing: border-box; /* Asegúrate de que el padding no rompa el diseño */
    overflow-x: hidden; /* Evita el desbordamiento horizontal */
    max-width: 100%; /* Asegúrate de que el contenedor no exceda el ancho */
    margin: 0 auto; /* Centra el contenedor */
    overflow-x: hidden;
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

  @media (min-width: 992px) {
    .recetas-container {
      padding: 2rem 6rem;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 5rem;
    }
  }
`;
