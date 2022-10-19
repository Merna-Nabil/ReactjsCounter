import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from './counterSlice';
import {cartSlice} from './cartslice';
// import { productsSlice } from "./productSlice";



export const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    cartStore: cartSlice.reducer,
    // productsSlice: productsSlice.reducer,
  },
});