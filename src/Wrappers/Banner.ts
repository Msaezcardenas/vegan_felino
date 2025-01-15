import styled from 'styled-components';

export const Wrapper = styled.div`
  .swiper {
    width: 80%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    height: 400px;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-secondary);
    background-color: var(--color-primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    background: var(--color-primary);
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-primary);
  }
`;
