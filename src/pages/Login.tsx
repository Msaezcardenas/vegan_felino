import { ActionFunction, Form, Link, NavLink, redirect } from 'react-router-dom';
import { Wrapper } from '../Wrappers/Login';
import Logo from '../components/Logo';
import axios, { AxiosResponse } from 'axios';
import { customFetch } from '../utils/customFetch';
import { loginUser } from '../features/user/userSlice';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../types';
import { ReduxStore } from '../store';
import { toast } from 'react-toastify';

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response: AxiosResponse = await customFetch.post('/users/login', data);
      const jwt = response.data.data;
      const decodedToken: DecodedToken = jwtDecode(jwt);
      store.dispatch(
        loginUser({
          username: decodedToken.first_name,
          jwt,
        }),
      );
      return redirect('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Error desconocido';
        toast.error(`${errorMessage}`, {
          position: 'top-right',
          autoClose: 3000,
        });
      } else {
        toast.error('Hubo un problema con la solicitud.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
      return null;
    }
  };

const Login = () => {
  return (
    <Wrapper>
      <div className='container-login'>
        <Link to='/'>
          <Logo />
        </Link>
        <Form className='form' method='post'>
          <div className='input-form'>
            <label> Email: </label>
            <input type='text' name='email' />
          </div>
          <div className='input-form'>
            <label> Contraseña: </label>
            <input type='password' name='password' />
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
