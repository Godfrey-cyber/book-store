import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure, logoutStart, logoutFailure, logoutSuccess } from './Slices/userSlice'
import axios from "axios"

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await axios.post("http://localhost:5000/api/v1/users/login", user, { withCredentials: true })
		if (res.status === 200 || res.statusText === 'OK') {
			dispatch(loginSuccess(res.data))
		}
		
		console.log(res.data)
		console.log(res)
	} catch (err) {
		dispatch(loginFailure())
		console.log(err.response.data.msg)
	}
}

export const logoutUser = async (dispatch) => {
	dispatch(logoutStart())
	try {
		const res = await axios.post("http://localhost:5000/api/v1/users/logout")
		if (res.status === 200 || res.statusText === 'OK') {
			dispatch(logoutSuccess())
		}
	} catch (err) {
		if (err || !res.status === 200 || !res.statusText === 'OK') {
			dispatch(logoutFailure())
		}
	}
}

export const register = async (dispatch, data) => {
	dispatch(registerStart())
	try {
		const res = await axios.post("http://localhost:5000/api/v1/users/register", data)
		if (res.status === 200 || res.statusText === 'OK') {
			dispatch(registerSucces(res.data))
		}
	} catch (error) {
		if (error || !res.status === 200 || !res.statusText === 'OK') {
			console.log(error?.response?.data?.msg)
			dispatch(registerFailure(error?.response?.data?.msg))
		}
	}
}