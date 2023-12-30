

const booksReducer = createReducer([], (builder) => {
	builder.addCase('CREATE_BOOK', (state, action) => {
		state.push(action.payload)
	})
	.addCase('DELETE_BOOK', (state, action) => {
      // Can still return an immutably-updated value if we want to
      return state.filter((book) => book._id !== action.payload._id)
    })
})