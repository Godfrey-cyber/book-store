import React from 'react'
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
	return (
		<section className="w-full h-fit bg-gray-100 pt-12">
			<div className="grid grid-cols-12 gap-8 w-4/5 mx-auto">
				<div className="col-span-3 flex flex-col space-y-4">
					<span className="flex h-10 cursor-pointer w-auto">
	        			<img className="w-full h-full" src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" />
	        		</span>
	        		<p className="text-sm text-gray-600 font-light">Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
					<div className="flex space-x-3 items-center" >
						<FaFacebook className="hover:text-blue-600 text-gray-500 transition delay-400 text-lg cursor-pointer" />
						<FaInstagram className="hover:text-yellow-600 text-gray-500 transition delay-400 text-lg cursor-pointer" />
						<FaYoutube className="hover:text-red-600 text-gray-500 transition delay-400 text-lg cursor-pointer" />
						<FaLinkedin className="hover:text-blue-600 text-gray-500 transition delay-400 text-lg cursor-pointer" />
					</div>
				</div>
				<div className="col-span-3 flex flex-col space-y-4">
					<p className="text-sm font-semibold text-color-gray-700 my-4">Book Category</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Horror Thriller</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Love Stories</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Science & Fiction</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Business</p>
				</div>
				<div className="col-span-3 flex flex-col space-y-4">
					<p className="text-sm font-semibold text-color-gray-700 my-4">Book Category</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Biography</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Astrology</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Digital Marketing</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Software development</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">E-commerce</p>
				</div>
				<div className="col-span-3 flex flex-col space-y-4">
					<p className="text-sm font-semibold text-color-gray-700 my-4">Site Map</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">About Us</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Home</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">FAQ</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Blog</p>
					<p className="text-sm font-light text-color-gray-700 hover:underline cursor-pointer hover:text-red-400 transition-all delay-400">Contact</p>
				</div>
				<div className="col-span-12 flex flex-col space-y-4 my-6 mx-auto">
					<p className="text-sm text-gray-700 font-light">Copyright ©2023 All rights reserved | This website is made with 💓 by Godfrey</p>
				</div>
			</div>
		</section>
	)
}

export default Footer