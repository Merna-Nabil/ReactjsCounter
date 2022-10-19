import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from './counterSlice';
import {cartSlice} from './cartslice';



export const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    cartStore: cartSlice.reducer,
  },
});