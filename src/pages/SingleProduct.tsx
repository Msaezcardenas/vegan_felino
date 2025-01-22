import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { Wrapper } from '../Wrappers/SingleProduct';
import { customFetch } from '../utils/customFetch';
import { Product } from '../utils/types';

export const loader: LoaderFunction = async ({ params }): Promise<Product> => {
  const response = await customFetch<Product>(`/products/${params.id}`);
  return response.data;
};

const SingleProduct = () => {
  const product = useLoaderData() as Product;
  console.log('--------->', product);

  const { image, title, description, price } = product;
  return (
    <Wrapper>
      <div className='page-single-product'>
        <div className='product-detail'>
          <div className='container-img'>
            <img src={`http://localhost:8080${image}`} />
          </div>
          <div className='detail'>
            <h1> {title}</h1>
            <p>{description}</p>
            <h2> ${price}</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
