// src/redux/slices/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newProduct = action.payload;
      const existingProduct = state.items.find(item => item._id === newProduct._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...newProduct, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.items.find(item => item._id === productId);

      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.items.find(item => item._id === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item._id !== productId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
