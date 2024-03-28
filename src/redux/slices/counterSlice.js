/**
 * Instead of creating both reducers and actions in different files, we will define a slice in the slice file. 
 * The slice structure will create both reducer and action.
  
  ** Slice Setup
  * 1- import createSlice
  * 2- Defining the required parameters
  * name > name of slice: string
  * initialState
  * reducers > functions that define actions
 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, theme: "dark" }, // first state
  // Functions that decide how the state changes, namely reducer functions
  // state is must in action
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count > 0 && state.count--;
    },

    reset: (state, action) => {
      state.count = action.payload;
    },
  },
});

// Exporting the createSlide's actions
export const { increase, decrease, reset } = counterSlice.actions;

// Exporting the reducer created by the createSlice method
export default counterSlice.reducer;
