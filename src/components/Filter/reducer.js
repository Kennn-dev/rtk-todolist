import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
  status: "all",
  priority: [],
};

const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    doSearch: (state, action) => {
      state.search = action.payload;
    },
    doFilterStatus: (state, action) => {
      state.status = action.payload;
    },
    doFilterPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
export const { doSearch, doFilterStatus, doFilterPriority } =
  filterReducer.actions;
export default filterReducer.reducer;
