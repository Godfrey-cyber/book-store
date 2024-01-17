import React from 'react'
import { useNavigate } from "react-router-dom"
import { image_1, image_2, image_3 } from "../assets/images"
import '../App.css'

const SignIn = () => {
	const navigate = useNavigate()
	return (
		<section className="bg-gray-500 grid grid-cols-12 w-full min-h-screen">
			<div className="relative col-span-7 flex-col bg-red-400 h-full">
				<div className="overay absolute top-0 left-0 z-10 w-full h-full"></div>
				<img className="h-full w-full" src="https://static.theceomagazine.net/wp-content/uploads/2023/04/21094311/books2.jpg" alt="a_random_image_of_a_random_image" />
			</div>
			<div className="col-span-5 flex-col flex items-center justify-center bg-green-400 h-full">
				<form className="flex flex-col gap-4 mx-auto my-auto w-3/5 max-h-fit bg-white rounded-md shadow-md shadow-white p-6">
					<span className="flex">
						<p className="font-['Lemon'] text-xl font-semibold text-gray-800">Create account.</p>
					</span>
					{/*<div className="flex items-center w-full space-x-2 overflow-x-none bg-red-400">*/}
						<span className="input_span">
							<input className="input" placeholder='Username' type="text" id="" />
						</span>
						{/*<span className="input_span">
							<input className="input" placeholder='Last Name' type="text" id="" />
						</span>*/}
					{/*</div>*/}
					<span className="input_span">
						<input className="input" placeholder='Enter Email' type="email" id="" />
					</span>
					<span className="input_span">
						<input className="input" placeholder='Enter Password' type="password" id="" />
					</span>
					<span className="input_span">
						<input className="input" placeholder='Confirm Password' type="password" id="" />
					</span>
					<span className="flex items-center space-x-1">
						<hr className="border border-gray-600 w-full" />
						<p className="text-sm text-gray-500">or</p>
						<hr className="border border-gray-600 w-full" />
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
					<button type="submit" className="bg-red-400 text-sm text-white font-semibold py-2 rounded-md w-full">Create Account</button>
					<div className="text-xs font-normal text-gray-700">Already have an account? <span onClick={() => navigate('/log_in')} className="text-red-400 hover:underline cursor-pointer">Log In</span></div>
				</form>
			</div>
		</section>
	)
}

export default SignIn