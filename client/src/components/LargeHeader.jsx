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
		<nav className={`navbar ${scrolled ? 'scrolled' : ''} large_header`}>
        	<div className="flex space-x-3 items-center">
	        	<span onClick={() => navigate("/")} className="flex h-8 cursor-pointer w-auto">
	        		<img className="w-full h-full" src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" />
	        	</span>
        	</div>
	        {/*SEARCH*/}
	        <div className="search_div">
	        	<input type="text" className="search_input" placeholder="Search book by author, title or publisher" />
	        	<FaSearch className="search_icon" />
	        </div>
	        {/*CTA'S*/}
	        <div className="flex space-x-4 items-center">
	        	<p className="cta_p">FAQ</p>
	        	<p className="cta_p">Track Order</p>
	        	<span onClick={() => navigate("/cart_page")} className="cursor-pointer">
	        		<BsCart className="cta_icon" />
	        		<span className="cta_span">{ items > 9 ? "9+" : items }</span>
	        	</span>
	        	<button onClick={() => navigate("/sign_in")} type="button" className="signin_btn">Sign In</button>
	        </div>
        </nav>
	)
}

export default LargeHeader