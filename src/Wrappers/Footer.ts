import styled from 'styled-components';

export const Wrapper = styled.footer`
  height: 100px;
  background-color: var(--color-secondary);
  position: relative;
  margin-top: auto;

  .custom-shape-divider svg {
    position: absolute;
    display: block;
    width: 100%;
    height: var(--heigth-footer-svg);
    top: calc(-1 * var(--heigth-footer-svg) - (-3px));
    transform: rotateY(180deg);
  }

  .custom-shape-divider .shape-fill {
    fill: #1c7c54;
  }

  .footer-container {
    position: relative; /* Asegura que el contenido del footer esté bien posicionado */
    z-index: 1;
    bottom: 0;
  }

  .footer-contact {
    color: var(--grey-50);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    padding: 0.5rem;
    letter-spacing: var(--letter-spacing);
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
    }
  }

  .rr-ss {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    div {
      display: flex;
      justify-content: space-evenly;
    }
    a {
      color: var(--grey-50);
    }
  }
`;
