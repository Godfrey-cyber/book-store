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
            // login(dispatch, formData)
			try {
				const res = await axios.post("http://localhost:5000/api/v1/users/login", formData, { withCredentials: true })
				if (res.status === 200 || res.statusText === 'OK') {
					dispatch(loginSuccess(res.data))
					setFormData({email: "", password: ""})
           			navigate('/')
				}
				
				console.log(res.data)
				console.log(res)
			} catch (err) {
				if (err || !res.status === 200 || !res.statusText === 'OK') {
					dispatch(loginFailure(err.response.data.msg))
					setFormData({email: "", password: ""})
				}
				
				console.log(err.response.data.msg)
			}
        }
    }
    const user = useSelector(selectUser)
    const userError = useSelector(loginError)
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

						{/*<button onClick={handleSubmit} disabled={isFetching} type="submit" className="bg-red-400 text-sm text-white font-semibold py-2 rounded-md w-full cursor-pointer">
							{isFetching && <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
							<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
							</svg>}
							{isFetching ? "Please wait..." : "Login"}
							</button>*/}

					<div className="text-xs font-normal text-gray-700">Don't have an account? <span onClick={() => navigate('/sign_up')} className="text-red-400 hover:underline cursor-pointer">Sign Up</span></div>
				</form>
			</div>
		</section>
	)
}

export default Login