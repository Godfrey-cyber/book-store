import { createSlice } from "@reduxjs/toolkit"

const bookSlice = createSlice({
	name: 'book',
	initialState: {
		book: null,
		isUploading: false,
		error: false,
		errMsg: null,
	},
	reducers: {
		getBookStart: (state, action) => {
			state.isUploading = true
			state.error = false
			state.book = null
			state.errMsg = null		
		},
		getBookSuccess: (state, action) => {
			state.isUploading = true
			state.error = false
			state.book = null
			state.errMsg = null		
		},
		getBookFailure: (state, action) => {
			state.isUploading = true
			state.error = false
			state.book = null
			state.errMsg = null		
		},
		// uploaad books
		// uploadStart(state, action) {
		// 	state.isUploading = true
		// 	state.error = false
		// 	state.book = null
		// 	state.errMsg = null
		// },
		// uploadSuccess: (state, action) => {
		// 	state.isUploading = false
		// 	state.error = false
		// 	state.book = action.payload
		// 	state.errMsg = null
		// },
		// uploadFailure: (state, action) => {
		// 	state.isUploading = false
		// 	state.error = true
		// 	state.book = null
		// 	// state.errMsg = null
		// }
		// createBook(state, action) {},
		// updateBook(state, action) {},
		// deleteBook(state, action) {},
	}
})

// const { actions, reducer } = bookSlice // Extract the action creators object and the reducer
export const { getBookStart, getBookSuccess, getBookFailure } = bookSlice.actions // Extract and export each action creator by name
export const selectBook = (state => state.book)
export default bookSlice.reducer // Export the reducer, either as a default or named export