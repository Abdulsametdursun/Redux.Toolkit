import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Navbar Animation",
      author: "Otto",
      appointee: "Ahmet",
      end_date: "2024-04-04",
    },
    {
      id: "2",
      title: "Payment System",
      author: "Otto",
      appointee: "Mehmet",
      end_date: "2024-03-04",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    // 1) Add new task
    addTask: (state, action) => {
      // create new id for task
      action.payload.id = v4();
      // Directly accessing the data we keep in the slice with the toolkit
      state.tasks.push(action.payload);
    },

    // 2) Update the task
    editTask: (state, action) => {
      const i = state.tasks.findIndex((t) => t.id === action.payload.id);

      // with splice
      // state.tasks.splice(i, 1, action.payload);

      // directly update
      state.tasks[i] = action.payload;
    },

    // 3) Delete the task
    removeTask: (state, action) => {
      const filtered = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = filtered;
    },
  },
});

// export of actions
export const { addTask, editTask, removeTask } = crudSlice.actions;

// export of reducer
export default crudSlice.reducer;
