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
`;
