import { combineReducers } from "@reduxjs/toolkit"
import bookSlice from "../Slices/bookSlice"
// import categoryReducer from "./categoryRedux.js"

export const store2 = combineReducers({
	book: bookSlice,
	// category: categoryReducer
})