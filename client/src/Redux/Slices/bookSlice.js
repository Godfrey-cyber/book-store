import { createSlice } from "@reduxjs/toolkit"

const bookSlice = createSlice({
	name: 'books',
	initialState: [],
	books: null,
	isUploading: false,
	error: false
	reducers: {
		uploadStart(state, action) {
			state.isUploading = true
			state.error = false
			state.product = null
		},
		uploadSuccess: (state, action) => {
			state.isUploading = false
			state.error = false
			state.product = action.payload
		},
		uploadFailure: (state, action) => {
			state.isUploading = false
			state.error = true
			state.product = null
		}
		// createBook(state, action) {},
		// updateBook(state, action) {},
		// deleteBook(state, action) {},
	}
})

const { actions, reducer } = postsSlice // Extract the action creators object and the reducer
export const { uploadStart, uploadSuccess, uploadFailure } = actions // Extract and export each action creator by name
export default reducer // Export the reducer, either as a default or named export