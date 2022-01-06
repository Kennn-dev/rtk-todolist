import filterReducer from "../components/Filter/reducer";
import todosReducer from "../components/Todos/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    todos: todosReducer,
  },
});
export default store;
