import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  .container-register {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 95vh;
    background-color: var(--white);
    border-radius: 10px;
    padding: 0 0.5rem;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 120px;
    height: auto;
    margin-right: 0.5rem;
  }
  h1 {
    font-weight: 500;
  }
  .form {
    padding: 0 1rem;
    width: 100%;
  }
  .input-form {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    padding: 0.3rem 0;
  }
  input {
    width: '100%';
    border: 1px solid var(--primary-300);
    border-radius: 10px;
    height: 30px;
    margin-top: 10px;
    padding: 0 1rem;
    font-size: 18px;
    margin: 0.3rem 0;
  }
  input:focus {
    outline: none; /* Quita el borde negro predeterminado */
    box-shadow: 0 0 5px rgba(255, 127, 0, 0.5); /* Agrega un efecto de brillo */
  }

  .btns {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    border: none;
    cursor: pointer;
    width: 100%;
    height: 30px;
    margin-top: 1rem;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 16px;
    font-family: var(font-family);
  }

  .btn-login {
    color: var(--black);
    margin-top: 1.3rem;
    text-decoration: underline;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 16px;
  }
  .btn-register {
    background-color: var(--color-primary);
    color: var(--white);
    height: 30px;
    transition: background-color 0.6s ease;
  }

  .btn-register:hover {
    background-color: var(--primary-700); /* Color más oscuro al pasar el mouse */
  }

  button:hover {
    background-color: var(--primary-700); /* Color más oscuro al pasar el mouse */
  }

  @media (min-width: 992px) {
    padding: 1rem;

    .container-register {
      width: 800px;
      height: 95vh;
      padding: 0 2rem;
    }
    img {
      width: 140px;
    }

    .form {
      width: 400px;
    }
    input {
      height: 35px;
    }
    .input-form {
      font-size: 20px;
      padding: 0.5rem 0;
    }
    .btn {
      height: 30px;
      margin-top: 1.5rem;
      font-size: 18px;
    }

    .btn-login {
      margin-top: 1.5rem;
      font-size: 18px;
    }
    .btn-register {
      height: 30px;
      font-size: 18px;
      margin-top: 1rem;
    }
  }
`;
