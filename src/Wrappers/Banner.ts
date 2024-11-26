import styled from 'styled-components';

export const Wrapper = styled.div`
  /* Estilo del contenedor principal */
  .swiper {
    width: 100%;
    /* max-width: 1200px; Ajusta este valor según el diseño deseado */
    height: auto; /* Deja que la altura dependa del contenido */
    margin: 0 auto; /* Centra el carrusel horizontalmente */
    overflow: hidden; /* Asegura que el contenido extra no sobresalga */
  }

  /* Estilo de los slides individuales */
  .swiper-slide {
    display: flex; /* Para alinear contenido dentro del slide */
    align-items: center;
    justify-content: center;
    background: #f5f5f5; /* Fondo del slide (ajústalo a tu diseño) */
    height: 300px; /* Altura específica del slide */
  }

  .swiper-slide img {
    width: 100%; /* Escala las imágenes */
    height: 100%; /* Ocupa toda la diapositiva */
    object-fit: cover; /* Recorta y ajusta las imágenes */
  }

  /* Controles de navegación (opcional) */
  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-secondary);
    background-color: var(--color-primary); /* Fondo semi-transparente */
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  /* Paginación (opcional) */
  .swiper-pagination {
    bottom: 10px; /* Ubicación en relación al contenedor */
  }

  .swiper-pagination-bullet {
    background: var(--color-secondary);
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-secondary);
  }
`;
