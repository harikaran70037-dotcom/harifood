import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../files/CounterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});