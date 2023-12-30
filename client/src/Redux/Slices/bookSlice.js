import { createSlice } from "@reduxjs/toolkit"

const bookSlice = createSlice({
	name: 'books',
	initialState: [],
	book: null,
	isUploading: false,
	error: false,
	reducers: {
		uploadStart(state, action) {
			state.isUploading = true
			state.error = false
			state.book = null
		},
		uploadSuccess: (state, action) => {
			state.isUploading = false
			state.error = false
			state.book = action.payload
		},
		uploadFailure: (state, action) => {
			state.isUploading = false
			state.error = true
			state.book = null
		}
		// createBook(state, action) {},
		// updateBook(state, action) {},
		// deleteBook(state, action) {},
	}
})

// const { actions, reducer } = bookSlice // Extract the action creators object and the reducer
export const { uploadStart, uploadSuccess, uploadFailure } = bookSlice.actions // Extract and export each action creator by name
export default bookSlice.reducer // Export the reducer, either as a default or named export