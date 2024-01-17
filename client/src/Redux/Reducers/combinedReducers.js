import { combineReducers } from '@reduxjs/toolkit';
import bookSlice from '../Slices/bookSlice.js';
import cartSlice from '../Slices/cartSlice.js';
import userSlice from '../Slices/userSlice.js';

const rootReducer = combineReducers({
  cart: cartSlice,
  book: bookSlice,
  user: userSlice,
  // Add other reducers here
});

export default rootReducer;