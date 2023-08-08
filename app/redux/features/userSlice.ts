import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  user: [];
}

const initialState: CounterState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    getUser: (state, action) => {
      const data = JSON.parse(localStorage.getItem("user") as string);
      state.user = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
