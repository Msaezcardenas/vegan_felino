import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  .receta-card {
    width: 100%;
    height: 450px;
    border-radius: 10px;
    background-color: var(--white);
    overflow: hidden;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .container-img {
    overflow: hidden;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .receta-card:hover img {
    transform: scale(1.3);
  }

  .receta-info {
    background-color: var(--white);
    padding: 1rem;
    h2 {
      text-align: center;
      margin-bottom: 1rem;
      color: var(--color-primary);
      font-weight: 600;
    }
  }

  .receta-info::after {
    content: '';
    position: absolute;
    bottom: 0rem;
    left: 0;
    width: 100%;
    height: 9rem; /* Ajusta según la cantidad de difuminado */
    background: linear-gradient(0deg, white 40%, rgba(247, 247, 247, 0) 100%);
    pointer-events: none; /* No interfiere con los clics en el contenido */
  }

  .seguir-leyendo {
    position: absolute;
    bottom: 1rem; /* Coloca el enlace al final */
    transform: translateX(10%);
    color: var(--color-primary);
    font-size: 1rem;
    font-weight: 600;
    z-index: 1;
  }

  .seguir-leyendo:hover {
    color: var(--primary-600);
  }

  @media (min-width: 992px) {
    .seguir-leyendo {
      transform: translateX(16%);
    }
  }
`;
