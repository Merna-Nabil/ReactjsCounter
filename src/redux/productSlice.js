// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const baseURL = "https://fakestoreapi.com/products";
// export const fetchProducts = createAsyncThunk("shop/fetchProduct", () => {
//   return fetch(baseURL)
//     .then((res) => res.json())
//     .then((json) => json);
// });

// const initialState = {
//   productList: [],
//   loading: false,
//   err: {},
// };

// export const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchProducts.pending]: (state) => {
//       // pending
//       state.loading = true;
//     },
//     [fetchProducts.fulfilled]: (state, action) => {
//       // fullfilled
//       state.loading = false;
//       state.productList = action.payload;
//     },
//     [fetchProducts.rejected]: (state, action) => {
//       // rejected
//       state.loading = false;
//       state.err = action.payload;
//     },
//   },
// });
