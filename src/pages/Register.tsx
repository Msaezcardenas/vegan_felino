import { Form, Link, NavLink } from 'react-router-dom';
import { Wrapper } from '../Wrappers/Register';
import Logo from '../components/Logo';

const Register = () => {
  return (
    <Wrapper>
      <div className='container-register'>
        <Link to='/'>
          <Logo />
        </Link>
        <Form className='form'>
          <div className='input-form'>
            <label> Nombre: </label>
            <input type='text' />
          </div>
          <div className='input-form'>
            <label> Apellido: </label>
            <input type='text' />
          </div>
          <div className='input-form'>
            <label> Email: </label>
            <input type='text' />
          </div>
          <div className='input-form'>
            <label> Contraseña: </label>
            <input type='text' />
          </div>
          <div className='btns'>
            <button type='submit' className='btn btn-register'>
              Registrarse
            </button>
            <NavLink to='/login' className='btn-login'>
              ¿ Ya tienes cuenta ?
            </NavLink>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Register;
