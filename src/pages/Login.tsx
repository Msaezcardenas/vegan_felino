import { Form, Link, NavLink } from 'react-router-dom';
import { Wrapper } from '../Wrappers/Login';
import Logo from '../components/Logo';

const Login = () => {
  return (
    <Wrapper>
      <div className='container-login'>
        <Link to='/'>
          <Logo />
        </Link>
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
            Iniciar Sesión
          </button>
          <NavLink to='/register' className='btn btn-register'>
            Crear Cuenta Nueva
          </NavLink>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
