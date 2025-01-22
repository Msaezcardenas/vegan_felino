import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import usersReducer from '../features/user/userSlice';
import productsReducer from './products/slice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    cartState: cartReducer,
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
