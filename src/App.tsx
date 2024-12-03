import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomeLayout, Landing, Tienda, Recetas, PuntosDeVenta, Blog, Carrito } from './pages';
import { loader as loaderProduct } from './components/ProductsSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'tienda',
        element: <Tienda />,
        loader: loaderProduct,
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
