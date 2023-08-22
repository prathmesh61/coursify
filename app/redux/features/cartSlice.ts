// import { createSlice } from "@reduxjs/toolkit";

// export interface CartState {
//   cart: [];
// }

// const initialState: CartState = {
//   cart: [],
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const course = state.cart.find(
//         (course) => course._id === action.payload._id
//       );
//       // check if course is already in cart or not if not add it with pre data
//       if (!course) {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       } else {
//         course.quantity += 1;
//       }
//     },
//     removeFromCart: (state, action) => {
//       const course = state.cart.filter(
//         (course) => course._id !== action.payload._id
//       );
//       state.cart = course;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {addToCart,removeFromCart} = cartSlice.actions;

// export default cartSlice.reducer;
