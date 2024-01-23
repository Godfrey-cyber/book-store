import { combineReducers } from '@reduxjs/toolkit';
import bookSlice from '../Slices/bookSlice';

const rootReducer = combineReducers({
  book: bookSlice,
  // Add other reducers here
});

export default rootReducer;