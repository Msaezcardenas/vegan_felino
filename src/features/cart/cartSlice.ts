import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../utils/types';

const defaultState: CartState = {
  cartItems: [],
  cartTotal: 0,
  orderTotal: 0,
  numItemsInCart: 0,
  statusTab: false,
  totalCart: 0,
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
        item.totalPriceItem = Number(item.price) * item.amount;
        state.numItemsInCart++;
        state.totalCart += Number(newItem.price);
      } else {
        newItem.amount = 1;
        newItem.totalPriceItem = Number(newItem.price);
        state.cartItems.push(newItem);
        state.numItemsInCart++;
        state.totalCart += Number(newItem.price) * newItem.amount;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productID = action.payload;
      const productFinded = state.cartItems.find((item) => item.productID === productID);
      if (!productFinded) return;
      if (productFinded) {
        if (productFinded.amount > 0) {
          productFinded.amount -= 1; // Reducir cantidad
          productFinded.totalPriceItem = Number(productFinded.price) * productFinded.amount;
          state.numItemsInCart--;
          state.totalCart -= Number(productFinded.price);
        }
        // La eliminación del ítem se realizará solo si su cantidad es 0 y ocurre en otro momento
        if (productFinded.amount <= 0) {
          state.cartItems = state.cartItems.filter((item) => item.productID !== productID);
          state.totalCart -= Number(productFinded.price);
        }
      }
    },
    toggleStatusTab: (state) => {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
    updateItemAmount: (state, action: PayloadAction<{ productID: string; amount: number }>) => {
      const { productID, amount } = action.payload;
      const item = state.cartItems.find((item) => item.productID === productID);
      if (item) {
        item.amount = amount; // Actualiza la cantidad
        state.numItemsInCart--;
      }
    },
  },
});

export const { addItem, removeItem, toggleStatusTab, updateItemAmount } = cartSlice.actions;

export default cartSlice.reducer;
