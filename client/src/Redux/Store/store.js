import { combineReducers, configureStore } from "@reduxjs/toolkit"
import rootReducer from "../Reducers/combinedReducers.js"

export const store = configureStore({
	reducer: rootReducer
})

