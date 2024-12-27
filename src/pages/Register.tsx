import { Form, Link, NavLink, redirect } from 'react-router-dom';
import { Wrapper } from '../Wrappers/Register';
import Logo from '../components/Logo';
import { ActionFunction } from 'react-router-dom';
import { customFetch } from '../utils/customFetch';

export const action: ActionFunction = async ({ request }) => {
  console.log('Ingresa a register');

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/users/register', data);
    console.log('Registrado');
    alert('Registrado');
    return redirect('/login');
  } catch (error) {
    // const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : 'Registration Failed';
    console.log(error);
    alert('Fail');
    return null;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <div className='container-register'>
        <Link to='/'>
          <Logo />
        </Link>
        <Form className='form' method='post'>
          <div className='input-form'>
            <label> Nombre: </label>
            <input type='text' name='first_name' />
          </div>
          <div className='input-form'>
            <label> Apellido: </label>
            <input type='text' name='last_name' />
          </div>
          <div className='input-form'>
            <label> Email: </label>
            <input type='email' name='email' />
          </div>
          <div className='input-form'>
            <label> Contraseña: </label>
            <input type='password' name='password' />
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
