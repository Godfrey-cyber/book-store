import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaSearch } from "react-icons/fa"
import { BsCart } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectTotal, totalCartCount, cartItems } from "../Redux/Slices/cartSlice.js"
import { selectUser } from "../Redux/Slices/userSlice.js"
import { selectBook } from "../Redux/Slices/bookSlice.js"
import { logoutUser } from "../Redux/apiCalls"
import '../App.css'

const LargeHeader = () => {
	const [scrolled, setIsScrolled] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [searchTerm, setSearchTerm] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [loading, setLoading] = useState(true)
	// redux
	// const total = useSelector(selectTotal)
    const books = useSelector(state => state.cart.books)
    const cartTotal = useSelector(totalCartCount)
    const items = useSelector(cartItems)
    const user = useSelector(selectUser)
	const loginRoute = '/log_in'
	const logoutRoute = '/sign_up'
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

	useEffect(() => {
		const handleSearch = async () => {
			// event.preventDefault()
			try {
				const response = await axios.get(`http://localhost:5000/api/v1/books/getAllBooks?search=${searchTerm}`)
				if (response.status === 200 || response.statusText === 'OK') {
					setSearchResults(response.data.data)
					setLoading(false)
				}
			} catch (error) {
				if (error || !res.status === 200 || !res.statusText === 'OK') {
					console.log(error)
				}
			}
		}
		handleSearch()
	}, [searchTerm])
	

	const { isFetching, error, errMsg } = useSelector(state => state.user)
	
	return (
		<nav className={`navbar ${scrolled ? 'scrolled' : ''} large_header`}>
        	<div className="flex space-x-3 items-center">
	        	<span onClick={() => navigate("/")} className="flex h-8 cursor-pointer w-auto">
	        		<img className="w-full h-full" src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" />
	        	</span>
        	</div>
	        {/*SEARCH*/}
	        <div className="flex flex-col relative">
		        <div className="search_div">
		        	<input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type="text" className="search_input" placeholder="Search book by author, title or publisher" />
		        	<FaSearch className="search_icon" />
		        </div>
		        {searchTerm && <div className="flex-col space-y-2 rounded-md bg-white shadow shadow-gray-200 min-h-[400px] min-w-[400px] absolute top-14 p-4">
		        	<span className="flex items-center w-full h-8 border-b border-gray-400">
		        		<span className="flex text-sm font-normal text-gray-800">Search results for <p className="text-sm font-semibold text-gray-800 ml-2">"{searchTerm}"</p></span>
		        	</span>
		        	{!loading ? searchResults && searchResults.map(book => (
		        			<div key={book._id} onClick={() => navigate(`/book_details/${book._id}`)} className="group flex space-x-3 cursor-pointer hover:bg-gray-100">
		        				<img src={book.photo} className="h-24 w-16 rounded" alt="" />
		        				<span className="flex flex-col justify-between p-2">
		        					<p className="text-sm font-semibold text-gray-800 group-hover:text-red-400 transition-all delay-200">{book.title}</p>
		        					<p className="text-xs font-normal text-gray-700">by {book.author}</p>
		        				</span>
		        			</div>
		        		)) : <p className="">loading</p>}
		        </div>
		    }
	        </div>
	        {/*CTA'S*/}
	        <div className="flex space-x-4 items-center">
	        	<p className="cta_p">FAQ</p>
	        	<p className="cta_p">Track Order</p>
	        	<span onClick={() => navigate("/cart_page")} className="cursor-pointer">
	        		<BsCart className="cta_icon" />
	        		<span className="cta_span">{ items > 9 ? "9+" : items }</span>
	        	</span>
	        	{!user ? <button onClick={() => navigate("/sign_up")} type="button" className="signin_btn">Log In</button> : 
	        	<button onClick={() => logoutUser(dispatch)} type="button" className="signin_btn">Log Out</button>}
	        </div>
        </nav>
	)
}

export default LargeHeader