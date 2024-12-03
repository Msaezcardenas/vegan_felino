import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  stock: number;
  status: boolean;
}

const initialState = [
  {
    id: 'seitan__1',
    title: 'seitan',
    price: 8600,
    description: 'comidita very teisti',
    stock: 20,
    status: true,
  },
];

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
