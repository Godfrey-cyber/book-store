import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
		errMsg: null
		// success: false
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true
			state.error = false
			// state.errMsg = false
		},
		loginSuccess: (state, action) => {
			state.isFetching = false
			state.error = false
			state.currentUser = action.payload
		},
		loginFailure: (state, action) => {
			state.isFetching = false
			state.error = true
			state.errMsg = action.payload
		},
		//register user
		registerStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		registerSuccess: (state, action) => {
			state.isFetching = false
			state.error = false
			state.currentUser = action.payload
		},
		registerFailure: (state, action) => {
			state.isFetching = false
			state.error = true
		},
		logoutStart: (state) => {
			state.isFetching = true
			// state.currentUser = null
		},
		logoutSuccess: (state) => {
			state.isFetching = false
			state.currentUser = null
		}
		,
		logoutFailure: (state) => {
			state.isFetching = false
			state.currentUser = null
		}
	}
})

export const { loginFailure, loginSuccess, loginStart, registerStart, registerSuccess, registerFailure, logoutStart, logoutFailure, logoutSuccess } = userSlice.actions
export const selectUser = (state => state.user?.currentUser)
export const loginError = (state => state.user?.errMsg)
export const registerError = (state => state.user?.errMsg)
export default userSlice.reducer