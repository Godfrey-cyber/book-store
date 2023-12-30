import { combineReducers } from "@reduxjs/toolkit"
import bookSlice from "../Slices/bookSlice.js"
import cartSlice from "../Slices/cartSlice.js"

const store = combineReducers({
	users: cartSlice
	books: bookSlice
})

export default store