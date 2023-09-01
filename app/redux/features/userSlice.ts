import { User_Type } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
type CartType = {
  description: string;
  quantity: number;
  coursename: string;
  banner: string;
  price: string | number;
  createdAt: string | Date;
  updatedAt: string | Date;
  __v: number;
  _id: string;
  autherID: {
    purchasedCourses: string[];
    courses: string[];
    email: string;
    isSeller: boolean;
    password: string;
    username: string;
    __v: number;
    _id: string;
  };
};

export interface CounterState {
  user: User_Type[];
  cart: CartType[];
}

const initialState: CounterState = {
  user: [],
  cart: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = [];
      state.cart = [];
    },
    addToCart: (state, action) => {
      const course = state.cart.find((item) => item._id === action.payload._id);
      if (!course) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        course.quantity += 1;
      }
    },
    removerFromCart: (state, action) => {
      const course = state.cart.filter((pro) => pro._id !== action.payload._id);
      state.cart = course;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOut, addToCart, removerFromCart, emptyCart } =
  userSlice.actions;

export default userSlice.reducer;
