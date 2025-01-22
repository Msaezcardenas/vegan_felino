import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  main {
    flex: 1; /* Hace que este contenedor ocupe el espacio restante */
    overflow-x: hidden;
  }
`;
