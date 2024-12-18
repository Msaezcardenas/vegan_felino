import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils/customFetch';
import { SingleProductResponse } from '../utils/types';
import { Wrapper } from '../Wrappers/SingleProduct';

export const loader: LoaderFunction = async ({ params }): Promise<SingleProductResponse> => {
  const response = await customFetch(`/products/${params.id}`);
  console.log(response);
  return { ...response.data };
};

const SingleProduct = () => {
  const { data } = useLoaderData() as SingleProductResponse;

  console.log(data);

  return (
    <Wrapper>
      <h1> {data.title}</h1>
      <h2>${data.price}</h2>
      <p> {data.description} </p>
      <p> Codigo: {data.code}</p>
    </Wrapper>
  );
};

export default SingleProduct;
