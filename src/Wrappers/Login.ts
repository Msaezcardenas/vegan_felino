import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 60vh;
    background-color: var(--grey-50);
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  .form {
    padding: 2rem;
  }
  .input-form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;
