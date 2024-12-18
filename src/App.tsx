import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomeLayout, Landing, Tienda, Recetas, PuntosDeVenta, Blog, Carrito } from './pages';
import { loader as loaderProduct } from './loaders/productLoader';
import { loader as singleProductLoader } from './components/SingleProduct.tsx';
import ErrorElement from './components/ErrorElement';
import SingleProduct from './components/SingleProduct';

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
        path: '/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: 'recetas',
        element: <Recetas />,
      },
      {
        path: 'puntosDeVenta',
        element: <PuntosDeVenta />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'carrito',
        element: <Carrito />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
