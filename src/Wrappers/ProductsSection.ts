import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  text-align: center;

  h1 {
    font-size: 36px;
    font-weight: 800;
  }

  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .divider {
    width: 2px;
    border: solid red;
  }
`;
