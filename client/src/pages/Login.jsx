import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import { image_3, image_2, image_1 } from "../assets/images"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, loginSuccess, loginStart, loginFailure, loginError } from "../Redux/Slices/userSlice.js"
import { login } from "../Redux/apiCalls.js"
import '../App.css'

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [errorMessage, setErrorMessage] = useState('')

	const [formData, setFormData] = useState({ email: "", password: "" })
	const [toggle, setToggle] = useState(false)
	const { email, password } = formData

	const onChange = (event) => {
        setFormData(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    // password visibility
    const togglePassword = () => {
    	setToggle(prev => !prev)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(loginStart())
        if (!email == "" || !password == "") {
			try {
				const res = await axios.post("http://localhost:5000/api/v1/users/login", formData, { withCredentials: true })
				if (res.status === 200 || res.statusText === 'OK') {
					dispatch(loginSuccess(res.data))
					setFormData({email: "", password: ""})
           			navigate('/')
				}
			} catch (err) {
				if (err || !res.status === 200 || !res.statusText === 'OK') {
					dispatch(loginFailure(err.response.data.msg))
					setFormData({email: "", password: ""})
				}
				
				console.log(err.response.data.msg)
			}
        } else {
    		console.log('Soory! Cannot log you without credentials')
    	}
    } 
    const user = useSelector(selectUser)
    const userError = useSelector(loginError) || errorMessage
    const { isFetching, error, errMsg } = useSelector(state => state.user)
    const data = useSelector(state => state.user)
    console.log(data)
    // const loginError = useSelector(state => state.user.errMsg)
    console.log(user)
    console.log(userError)
	return (
		<section className="bg-gray-500 grid grid-cols-12 w-full h-screen">
			<div className="relative col-span-8 flex-col bg-red-400 h-full">
				<div className="overay absolute top-0 left-0 z-10 w-full h-full"></div>
				<img className="h-full w-full" src="https://static.theceomagazine.net/wp-content/uploads/2023/04/21094311/books2.jpg" alt="a_random_image_of_a_random_image" />
			</div>
			<div className="col-span-4 flex-col flex items-center justify-center bg-green-400 h-full">
				<form className="flex flex-col gap-4 mx-auto my-auto w-3/5 max-h-fit bg-white rounded-md shadow-md shadow-white p-4">
					<span className="flex">
						<p className="font-['Lemon'] text-xl font-semibold text-gray-800">Sign In here.</p>
					</span>
					<span className="input_span">
						<input onChange={onChange} value={email} name="email" className="input" placeholder='Enter Email' type="email" />
					</span>
					<span className="input_span">
						<input onChange={onChange} value={password} name="password" className="input" placeholder='Enter Password' type={!toggle ? "password" : "text"} />
						{toggle ? <FaRegEyeSlash onClick={togglePassword} className="mr-2 text-lg text-gray-600 cursor-pointer" /> : <FaRegEye onClick={togglePassword} className="mr-2 text-lg text-gray-600 cursor-pointer" />}
					</span>
					<span className="flex items-center space-x-1">
						<hr className="border border-gray-500 w-full" />
						<p className="text-sm text-gray-500">or</p>
						<hr className="border border-gray-500 w-full" />
					</span>
					<div className="flex flex-col space-y-3">
						<span className="image_span">
							<img className="form_image" src={image_3} alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Google</p>
						</span>
						<span className="image_span">
							<img className="form_image" src={image_2} alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Facebook</p>
						</span>
						<span className="image_span">
							<img className="form_image" src={image_1} alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Apple</p>
						</span>
					</div>
					{error && <p className="text-xs font-medium text-red-400">{userError}</p>}
					<button onClick={handleSubmit} type="submit" className="bg-red-400 text-sm text-white font-semibold py-2 rounded-md w-full">Login</button>
					<div className="text-xs font-normal text-gray-700">Don't have an account? <span onClick={() => navigate('/sign_up')} className="text-red-400 hover:underline cursor-pointer">Sign Up</span></div>
				</form>
			</div>
		</section>
	)
}

export default Login