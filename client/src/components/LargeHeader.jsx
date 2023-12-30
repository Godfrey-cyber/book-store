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
	const total = useSelector(selectTotal)
    const products = useSelector(state => state.cart.products)
    const cartTotal = useSelector(totalCartCount)
    const items = useSelector(cartItems)
    // scroll
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0
			setIsScrolled(isScrolled)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}

	}, [])
	return (
		<nav className={`navbar ${scrolled ? 'scrolled' : ''} transition delay-300 flex h-[60px] relative justify-between items-center w-full bg-gray-100 shadow-xl shadow-gray-600 border-b border-gray-300 px-20`}>
        	<div className="flex space-x-3 items-center">
	        	<span onClick={() => navigate("/")} className="flex h-8 cursor-pointer w-auto">
	        		<img className="w-full h-full" src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" />
	        	</span>
        		{/*<div className="flex flex-col space-y-2">
        			<p className="text-2xl font-bold text-red-400">S. BOOK</p>
        			<p className="text-sm font-medium text-gray-400">SHOP</p>
        		</div>*/}
        	</div>
	        {/*<div className="flex space-x-8 group">
	        	<p className="text-sm font-normal text-orange-500 hover:text-orange-600 hover:font-light transition delay-300 cursor-pointer">HOME</p>
	        	<p className="text-sm font-normal text-orange-500 hover:text-orange-600 hover:font-light transition delay-300 cursor-pointer">PAGES</p>
	        	<p className="text-sm font-normal text-orange-500 hover:text-orange-600 hover:font-light transition delay-300 cursor-pointer">BOOKS</p>
	        	<p className="text-sm font-normal text-orange-500 hover:text-orange-600 hover:font-light transition delay-300 cursor-pointer">BLOG</p>
	        	<p className="text-sm font-normal text-orange-500 hover:text-orange-600 hover:font-light transition delay-300 cursor-pointer">CONTACTS</p>
	        </div>*/}
	        {/*SEARCH*/}
	        <div className="flex justify-between items-center rounded-3xl border border-gray-500 w-96 h-11 p-1">
	        	<input type="text" className="w-full h-full outline-none border-none rounded-3xl bg-transparent px-3 text-sm font-light text-gray-600" placeholder="Search book by author, title or publisher" />
	        	<FaSearch className="hover:text-red-600 text-red-500 transition delay-400 text-2xl font-light cursor-pointer mr-3" />
	        </div>
	        {/*CTA'S*/}
	        <div className="flex space-x-4 items-center">
	        	
	        	<p className="text-sm font-thin text-black cursor-pointer">FAQ</p>
	        	<p className="text-sm font-thin text-black cursor-pointer">Track Order</p>
	        	<BsCart className="hover:text-red-600 text-red-500 transition delay-400 text-2xl font-light cursor-pointer mr-3" />
	        	<span an onClick={() => navigate("/products_cart")} className="flex items-center absolute bottom-7 right-44 bg-red-400 h-6 w-6 justify-center rounded-full text-center text-white text-xs border-2 border-white">{ items > 9 ? "9+" : items }</span>
	        	<p className="text-sm font-medium rounded-3xl text-black bg-red-400 rounded-sm px-5 py-2 transition delay-300 cursor-pointer">Sign In</p>
	        </div>
        </nav>
	)
}

export default LargeHeader