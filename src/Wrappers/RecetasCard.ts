import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  .receta-card {
    width: 300px;
    height: 500px;
    border-radius: 10px;
    background-color: var(--white);
    overflow: hidden;
  }

  .container-img {
    /* position: relative; */
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .receta-info {
    background-color: var(--white);
    height: 100%;
    padding: 1.5rem;
    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;
