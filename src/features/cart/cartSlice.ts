/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { CartProduct } from '@/types/product';

export interface CartInitialState {
  cartItems: CartProduct[];
  totalQuantity: number;
  totalAmount: number;
  isLoading: boolean;
}

export const initialState: CartInitialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
};

// TODO: Ordering of items
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cartItems.unshift({ ...product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== product.id
          );
        } else {
          existingProduct.quantity -= 1;
        }
      }
    },
    calculateTotal: (state) => {
      const totalQuantity = state.cartItems.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const totalAmount = state.cartItems.reduce(
        (acc, curr) => acc + curr.quantity * curr.unitPrice,
        0
      );
      return {
        ...state,
        totalQuantity,
        totalAmount,
      };
    },
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { clearCart, addToCart, removeFromCart, calculateTotal, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
