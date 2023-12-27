import React from 'react'
import { FaYoutube, FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import { IoMdMail, IoMdTime } from "react-icons/io"

const SmalHeader = () => {
	return (
		<section className="flex justify-between items-center w-full bg-gray-200 px-20 h-[40px] ">
			{/*<div className=" w-full">*/}
				{/*//media & time*/}
				<div className="flex justify-between items-center space-x-3">
					<span className="flex space-x-2 text-gray-500 text-sm items-center">
						<IoMdTime className="hover:text-red-600 text-gray-500 transition delay-400 text-sm cursor-pointer" />
						<p className="text-sm font-light text-gray-600">Openning Hours 10.00 am - 6.00 pm</p>	
					</span>
					<span className="flex space-x-3 text-gray-600">|</span>
					<div className="flex space-x-3 items-center" >
						<FaFacebook className="hover:text-blue-600 text-gray-500 transition delay-400 text-sm cursor-pointer" />
						<FaInstagram className="hover:text-yellow-600 text-gray-500 transition delay-400 text-sm cursor-pointer" />
						<FaYoutube className="hover:text-red-600 text-gray-500 transition delay-400 text-sm cursor-pointer" />
					</div>
				</div>
				{/*SELL A BOOK*/}
				<p className="text-sm font-light hover:text-gray-700 hover:text-red-500 hover:font-medium transition-all delay-300 text-gray-600 cursor-pointer">Sell a book</p>
				{/*//cta*/}
				<div className="flex space-x-3 px-20 items-center">
					<span className="flex space-x-2 font-light text-sm text-gray-600 items-center">
						<FaPhoneAlt className="hover:text-red-600 text-gray-500 transition delay-400 text-sm cursor-pointer" />
						<p className="text-sm font-light text-gray-600">reallygreat@gmail.com</p>	 
					</span>
					<span className="flex space-x-2 font-light text-sm text-gray-600 items-center">
						<IoMdMail className="hover:text-red-600 text-gray-500 transition delay-400 text-sm cursor-pointer" />
						<p className="text-sm font-light text-gray-600">+254 7123 8456</p>
					</span>
				</div>
			{/*// </div>*/}
		</section>
	)
}

export default SmalHeader