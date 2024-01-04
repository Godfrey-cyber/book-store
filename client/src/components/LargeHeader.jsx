import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { BsCart } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectTotal, totalCartCount, cartItems } from "../Redux/Slices/cartSlice.js"
import '../App.css'

const LargeHeader = () => {
	const [scrolled, setIsScrolled] = useState(false)
	const navigate = useNavigate()
	// redux
	// const total = useSelector(selectTotal)
    const books = useSelector(state => state.cart.books)
    const cartTotal = useSelector(totalCartCount)
    const items = useSelector(cartItems)
    console.log(items)
    console.log(cartTotal)
    console.log(books)
    // scroll
	useEffect(() => {
		const handleScroll = () => {
			window.scrollY >= 400 ? setIsScrolled(true) : setIsScrolled(false)
		} 
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}

	}, [scrolled])
	return (
		<nav className={`navbar ${scrolled ? 'scrolled' : ''} transition delay-300 flex h-[60px] relative justify-between items-center w-full bg-gray-100 shadow-xl shadow-gray-600 border-b z-10 border-gray-300 px-20`}>
        	<div className="flex space-x-3 items-center">
	        	<span onClick={() => navigate("/")} className="flex h-8 cursor-pointer w-auto">
	        		<img className="w-full h-full" src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" />
	        	</span>
        	</div>
	        {/*SEARCH*/}
	        <div className="flex justify-between items-center rounded-3xl border border-gray-500 w-96 h-11 p-1">
	        	<input type="text" className="w-full h-full outline-none border-none rounded-3xl bg-transparent px-3 text-sm font-light text-gray-600" placeholder="Search book by author, title or publisher" />
	        	<FaSearch className="hover:text-red-600 text-red-500 transition delay-400 text-2xl font-light cursor-pointer mr-3" />
	        </div>
	        {/*CTA'S*/}
	        <div className="flex space-x-4 items-center">
	        	
	        	<p className="text-sm font-thin text-black cursor-pointer">FAQ</p>
	        	<p className="text-sm font-thin text-black cursor-pointer">Track Order</p>
	        	<span onClick={() => navigate("/cart_page")} className="cursor-pointer">
	        		<BsCart className="hover:text-red-600 text-red-500 transition delay-400 text-2xl font-light cursor-pointer mr-3" />
	        		<span className="flex items-center absolute bottom-7 right-44 bg-red-400 h-6 w-6 justify-center rounded-full text-center text-white text-xs border-2 border-white">{ items > 9 ? "9+" : items }</span>
	        	</span>
	        	<button onClick={() => navigate("/sign_in")} type="button" className="text-sm font-medium border border-red-400 hover:divide-red-500 hover:bg-white text-white rounded-3xl bg-red-400 rounded-3xl hover:text-red-500 px-5 py-2 transition-all delay-300 ease-in-out duration-300 cursor-pointer">Sign In</button>
	        </div>
        </nav>
	)
}

export default LargeHeader