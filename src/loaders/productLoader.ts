import { LoaderFunction } from 'react-router-dom';
import { customFetch } from '../utils/customFetch';
import { ProductsResponse } from '../utils/types';
const url = '/products';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  try {
    const response = await customFetch<ProductsResponse>(url);

    if (!response?.data?.data || !Array.isArray(response.data.data)) {
      throw new Error('Datos inválidos en la respuesta');
    }

    return response.data;
  } catch (error) {
    console.log('INGRESA ERROR');

    console.log(error);

    throw new Response('Error loading data', { status: 500 });
  }
};
