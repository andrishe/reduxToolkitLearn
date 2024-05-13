import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    value: "John Doe",
  },
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeName } = nameSlice.actions;

export default nameSlice.reducer;
