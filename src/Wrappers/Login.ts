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
    width: 280px;
    height: 90%;
    background-color: var(--white);
    border-radius: 10px;
    padding: 0 1.5rem;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 140px;
    height: auto;
    margin-right: 0.5rem;
  }

  .form {
    width: 100%;
  }
  .input-form {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }
  input {
    width: '100%';
    border: 1px solid var(--primary-300);
    border-radius: 10px;
    height: 40px;
    margin-top: 10px;
    padding: 0 1rem;
    font-size: 18px;
  }
  input:focus {
    outline: none; /* Quita el borde negro predeterminado */
    box-shadow: 0 0 5px rgba(255, 127, 0, 0.5); /* Agrega un efecto de brillo */
  }

  .btn {
    border: none;
    cursor: pointer;
    width: 100%;
    height: 30px;
    margin-top: 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 16px;
    font-family: var(font-family);
  }

  .btn-login {
    background-color: var(--color-primary);
    color: var(--white);
    height: 32px;
    transition: background-color 0.6s ease;
  }
  .btn-register {
    text-align: center;
    color: var(--color-primary);
    background-color: var(--white);
    border: 2px solid var(--primary-300);

    background-color: transparent;
  }

  .btn-register:hover {
    background-color: var(--primary-100);
    border: 1px solid var(--primary-500);
    color: var(--primary-500);
  }

  button:hover {
    background-color: var(--primary-700); /* Color más oscuro al pasar el mouse */
  }

  @media (min-width: 992px) {
    padding: 1rem;
    .form {
      width: 400px;
      padding: 0;
    }

    .container-login {
      width: 800px;
      height: 100%;
      padding: 2rem;
    }
    .input-form {
      padding: 1rem 0;
      font-size: 20px;
    }

    input {
      height: 40px;
      font-size: 20px;
    }

    .btn {
      cursor: pointer;
      font-size: 20px;
      height: 40px;
    }
  }
`;
