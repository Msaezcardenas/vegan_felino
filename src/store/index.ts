import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/slice';
import productsReducer from './products/slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
