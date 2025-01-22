import { ActionFunction, Form, Link, NavLink, redirect } from 'react-router-dom';
import { Wrapper } from '../Wrappers/Login';
import Logo from '../components/Logo';
import { AxiosResponse } from 'axios';
import { customFetch } from '../utils/customFetch';
import { loginUser } from '../features/user/userSlice';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../types';
import { ReduxStore } from '../store';

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      // Realiza la solicitud al backend
      const response: AxiosResponse = await customFetch.post('/users/login', data);

      // Decodifica el token JWT
      const jwt = response.data.data;
      const decodedToken: DecodedToken = jwtDecode(jwt);
      console.log(decodedToken);

      // Guarda el token y el usuario en el estado global
      store.dispatch(
        loginUser({
          username: decodedToken.first_name,
          jwt,
        }),
      );

      // Redirige al usuario
      return redirect('/');
    } catch (error) {
      console.error(error);
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
