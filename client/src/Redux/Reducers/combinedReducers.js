import { combineReducers } from '@reduxjs/toolkit';
import bookSlice from '../Slices/bookSlice.js';
import cartSlice from '../Slices/cartSlice.js';

const rootReducer = combineReducers({
  cart: cartSlice,
  book: bookSlice,
  // Add other reducers here
});

export default rootReducer;