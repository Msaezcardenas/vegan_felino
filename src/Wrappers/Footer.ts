import styled from 'styled-components';

export const Wrapper = styled.footer`
  height: 100px;
  background-color: var(--color-secondary);
  position: relative;

  .custom-shape-divider-bottom-1732802773 {
    /* position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0; */
  }

  .custom-shape-divider-bottom-1732802773 svg {
    position: absolute;
    display: block;
    width: 100%;
    height: var(--heigth-footer-svg);
    top: calc(-1 * var(--heigth-footer-svg) - (-3px));
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1732802773 .shape-fill {
    fill: #1c7c54;
  }
`;
