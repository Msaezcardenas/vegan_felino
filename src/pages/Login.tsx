import { Form, NavLink } from 'react-router-dom';
import { Wrapper } from '../Wrappers/Login';

const Login = () => {
  return (
    <Wrapper>
      <div className='container-login'>
        <h1 className='login-header'> Login</h1>
        <Form className='form'>
          <div className='input-form'>
            <label> Email: </label>
            <input type='text' />
          </div>
          <div className='input-form'>
            <label> Contraseña: </label>
            <input type='text' />
          </div>
          <button type='submit' className='btn btn-login'>
            Entrar
          </button>
          <NavLink to='/register' className='btn btn-register'>
            Registrarse
          </NavLink>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
