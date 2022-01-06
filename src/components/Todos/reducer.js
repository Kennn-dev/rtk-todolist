import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
const todoReducer = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { content, priority } = action.payload;
      state = state.push({
        id: uuidv4(),
        content: content,
        priority: priority,
        status: false,
      });
    },
    changeStatus: (state, action) => {
      const { id, status } = action.payload;
      const index = state.findIndex((v) => v.id === id);
      if (index != -1) {
        state[index].status = status;
      }
    },
  },
});
export const { addTodo, changeStatus } = todoReducer.actions;
export default todoReducer.reducer;
