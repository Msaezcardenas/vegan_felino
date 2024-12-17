import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../utils/types';

const defaultState: CartState = {
  cartItems: [],
  cartTotal: 0,
  orderTotal: 0,
  numItemsInCart: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      console.log(newItem);

      const item = state.cartItems.find((item) => item.productID === newItem.productID);

      if (item) {
        console.log('ingresa IF');
        item.amount = newItem.amount;
      } else {
        console.log('ingresa ELSE');
        state.cartItems.push(newItem);
      }
      state.numItemsInCart++;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
