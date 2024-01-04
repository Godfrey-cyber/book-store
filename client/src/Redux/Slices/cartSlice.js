import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		books: [],
		totalCount: 0,
		total: 0
	},
	reducers: {
		addBook: (state, action) => {
			let cartIndex = state.books.findIndex(item => item._id === action.payload.id)
			if (cartIndex >= 0) {
				state.books[cartIndex].count += 1
			} else {
				let tempBook = { ...action.payload, count: 1 }
          		state.books.push(tempBook)
			}
			state.total += action.payload.price;
		},
		getTotal: (state, action) => {
			state.total = state.books.reduce((acc, item) => {
	        return acc + item.price * item.count
	      }, 0)
		},
		increment: (state, action) => {
	      	let index = state.books.findIndex((item) => item._id === action.payload.id)
	      	state.books[index].count += 1
	    },
	    decrement: (state, action) => {
		    let index = state.books.findIndex((item) => item._id === action.payload.id)
		    if (state.books[index].count <= 0) {
		        state.books[index].count = 0
		    } else {
		        state.books[index].count -= 1
		    }
	    },
	    getCartCount: (state, action) => {
	      	let cartCount = state.books.reduce((total, item) => {
	        return item.count + total
	     }, 0)
	      	state.totalCount = cartCount
	    },
	    removeFromCart: (state, action) => {
			const index = state.books.findIndex(cartItem => cartItem._id === action.payload.id)
			const newBasket = [...state.books]
			if(index >= 0) {
				newBasket.splice(index, 1)
				state.count -= 1 
				} else {
					console.log('cannot remove item');
				}
			state.books = newBasket;
		},
		resetCart: (state) => {
			state.books = []
			state.totalCount = 0
			state.total = 0
		}
	}
})

export const {addBook, removeFromCart, resetCart, deleteAll, getTotal, increment, decrement, getCartCount} = cartSlice.actions
export const selectTotal = (state) => state.cart.books?.reduce((total, book) => total + book.price * book.count, 0);
export const cartItems = (state) => state.cart.books.reduce((total, item) => total + item.count, 0)
export const items = (state) => state.cart.books
export const totalCartCount = (state) => state.cart.totalCount
export default cartSlice.reducer