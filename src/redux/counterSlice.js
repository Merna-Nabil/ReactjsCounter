import { createSlice } from "@reduxjs/toolkit";
// initialState
const initialState = {
  counter: 0,
};

// reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrementCount: (state, action) => {
      state.counter = state.counter - 1;
    },
  },
});

// action

export const { incrementCount, decrementCount } = counterSlice.actions;
