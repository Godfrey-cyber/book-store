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
						<FaFacebook className="hover:text-blue-600 footer_icons" />
						<FaInstagram className="hover:text-yellow-600 footer_icons" />
						<FaYoutube className="hover:text-red-600 footer_icons" />
						<FaLinkedin className="hover:text-blue-600 footer_icons" />
					</div>
				</div>
				<div className="col-span-3 flex flex-col space-y-4">
					<p className="footer_p">Book Category</p>
					<p className="footer_text">Horror Thriller</p>
					<p className="footer_text">Love Stories</p>
					<p className="footer_text">Science & Fiction</p>
					<p className="footer_text">Business</p>
				</div>
				<div className="col-span-3 flex flex-col space-y-4">
					<p className="footer_p">Book Category</p>
					<p className="footer_text">Biography</p>
					<p className="footer_text">Astrology</p>
					<p className="footer_text">Digital Marketing</p>
					<p className="footer_text">Software development</p>
					<p className="footer_text">E-commerce</p>
				</div>
				<div className="col-span-3 flex flex-col space-y-4">
					<p className="footer_p">Site Map</p>
					<p className="footer_text">About Us</p>
					<p className="footer_text">Home</p>
					<p className="footer_text">FAQ</p>
					<p className="footer_text">Blog</p>
					<p className="footer_text">Contact</p>
				</div>
				<div className="col-span-12 flex flex-col space-y-4 my-6 mx-auto">
					<p className="text-sm text-gray-700 font-light">Copyright ©2023 All rights reserved | This website is made with 💓 by Godfrey</p>
				</div>
			</div>
		</section>
	)
}

export default Footer