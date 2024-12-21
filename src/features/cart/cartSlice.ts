import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../utils/types';

const defaultState: CartState = {
  cartItems: [],
  cartTotal: 0,
  orderTotal: 0,
  numItemsInCart: 0,
  statusTab: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const item = state.cartItems.find((item) => item.productID === newItem.productID);
      if (item) {
        item.amount++;
      } else {
        newItem.amount = 1;
        state.cartItems.push(newItem);
      }
      state.numItemsInCart++;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productID = action.payload;
      const productFinded = state.cartItems.find((item) => item.productID === productID);
      if (productFinded) productFinded.amount--;
      state.cartItems.filter((item) => {
        return item.productID !== productID;
      });
      state.numItemsInCart--;
    },
    toggleStatusTab: (state) => {
      console.log('INGRESA A TOGGLE');

      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
      console.log(state.statusTab);
    },
  },
});

export const { addItem, removeItem, toggleStatusTab } = cartSlice.actions;

export default cartSlice.reducer;
