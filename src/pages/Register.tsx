import { Form, NavLink } from 'react-router-dom';
import { Wrapper } from '../Wrappers/Register';

const Register = () => {
  return (
    <Wrapper>
      <div className='container-register'>
        <h1> Registrarse</h1>
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
