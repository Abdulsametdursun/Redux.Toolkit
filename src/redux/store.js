import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlide";

// Pros of configureStore:
// 1- Comes with thunk by default.
// 2= It automatically combines the given reducers.
export default configureStore({
  reducer: {
    counterReducer,
    crudReducer,
  },
});
