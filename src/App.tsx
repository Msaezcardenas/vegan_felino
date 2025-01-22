import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos
import { ToastContainer } from 'react-toastify'; // Importa el contenedor de los toasts

import { HomeLayout, Landing, Tienda, Recetas, PuntosDeVenta, Blog, Login, Register, DetailRecipe } from './pages';
import { loader as loaderProduct } from './loaders/productLoader';
import { loader as singleProductLoader } from './pages/SingleProduct';

import ErrorElement from './components/ErrorElement';
import SingleProduct from './pages/SingleProduct';

import { action as registerUser } from './pages/Register';
import { action as loginUser } from './pages/Login';
import { store } from './store/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: loaderProduct,
      },
      {
        path: 'tienda',
        element: <Tienda />,
        loader: loaderProduct,
        errorElement: <ErrorElement />,
      },
      {
        path: 'tienda/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: 'recetas',
        element: <Recetas />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'recetas/:recetaId',
        element: <DetailRecipe />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'puntosDeVenta',
        element: <PuntosDeVenta />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorElement />,
    action: loginUser(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorElement />,
    action: registerUser,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}
export default App;
