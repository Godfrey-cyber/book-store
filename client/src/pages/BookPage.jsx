import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
import BestSelling from "../components/BestSelling.jsx"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addBook, items, getTotal, getCartCount, cartItems, decrement, increment } from '../Redux/Slices/cartSlice'
import SmallHeader from "../components/SmallHeader"
import LargeHeader from "../components/LargeHeader"

const BookPage = () => {
	const [book, setBook] = useState({})
	const [cartBooks, setCartBooks] = useState({})
	const location = useLocation()
	const dispatch = useDispatch()
	const id = location.pathname.split('/')[2]
	const etp = useSelector(cartItems)
	const books = useSelector(items)
	console.log(etp)
	// handle book increase
	const handleQtyInc = () => {
		setCount(count + 1)
		dispatch(increment({id: book._id, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
	}
	// handle book decrease
	const handleQtyDec = () => {
		count >= 2 && setCount(count - 1)
		dispatch(decrement({id: book._id, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
	}
	// add book to cart
	const addBookToCart = () => {
		setCount(count + 1)
		dispatch(addBook({ ...book, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
	}
	// check if current book exists in the cart books if it does do not display the add to cart button
	const checkBookAvailability = () => {
		return books.findIndex(bookItem => bookItem._id === book._id)
	}
	const availability = checkBookAvailability()
	console.log(availability)
	// if the book exists then display the count of that particular book
	const filterBook = books.filter((filteredBook, i) => filteredBook._id === book._id)
	const { _id: bookId } = filterBook
	console.log(bookId)
	console.log(filterBook)

	const arr = Object.keys(filterBook).map(([key, val]) => filterBook[key].count)[0]
	console.log(typeof(arr))

	
	for (let i of filterBook) {
    	console.log(i.count);
	}

	const iterable = filterBook.forEach(({count, title, desc }) => desc)
	console.log(iterable)
	
	const [count, setCount] = useState(arr ? arr : 0)
	console.log(arr)
	useEffect(() => {
		const getBook = async() => {
			try {
				const response = await axios.get(`http://localhost:5000/api/v1/books/getBook/${id}`)
				if (response.status === 200) {
					setBook(response.data.data)
				} else {
					console.log('error')
				}
			} catch(error) {
				console.error('❗Error fetching data❌:', error.message);
			}
		}
		getBook()
	}, [id])
	return (
		<section className="w-full h-full bg-white">
			<SmallHeader />
			<LargeHeader />
			<main className="grid grid-cols-12 gap-x-8 w-4/5 mx-auto my-12 h-fit">
				<div className="col-span-3 flex flex-col space-y-4 h-full">
					<img className="w-full h-96 my-6 bg-cover group-hover:rounded-t-md transition-all delay-400" src={book.photo} alt="" />
					<button className="text-sm text-white font-semibold bg-red-400 border border-red-300 hover:bg-white hover:text-red-400 transition-all delay-400 rounded-3xl px-3 py-2">Read</button>
					<button disabled={count > 1} className="text-sm text-red-400 font-semibold bg-white border border-red-300 hover:bg-red-400 hover:text-white transition-all delay-400 rounded-3xl px-3 py-2">Buy this book</button>
				</div>
				<div className="col-span-9 flex flex-col space-y-4 h-full w-full px-10">
					<p className="text-4xl font-normal tex-gray-700">{book.title}</p>
					<p className="text-lg font-light tex-gray-700 cursor-pointer hover:underline">{book.author}</p>
					<span className="flex items-center cursor-pointer">
						<FaStar className="text-3xl text-red-500" />
						<FaStar className="text-3xl text-red-500" />
						<FaStar className="text-3xl text-red-500" />
						<FaStar className="text-3xl text-red-500" />
						<FaStarHalfStroke className="text-3xl text-red-500" />
					</span>
					<span className="flex items-center space-x-3">
						<p className="text-sm font-light text-gray-700">(120 Reviews)</p>
						<p className="text-sm font-light text-red-500">1,142 Ratings</p>
					</span>
					<p className="text-sm font-light text-gray-700">{book.desc}</p>
					<span className="flex space-x-3 text-sm items-center">
						<p className="text-gray-700 font-light">Price:</p>
						<p className="text-red-500 font-light">Ksh. {book.price}</p>
					</span>
					<button onClick={addBookToCart} className={`text-sm text-red-400 font-semibold bg-white border text-center flex justify-center border-red-300 hover:bg-red-400 hover:text-white transition-all delay-400 w-2/5 rounded-md px-3 py-2 ${availability >= 0 ? 'hidden' : "inline-flex"}`}>Add to cart</button>
				{/*qty buttons*/}
					<div className="flex items-center border border-gray-200 rounded-md w-max">
						<button disabled={arr <= 1} onClick={() => handleQtyDec()} className="items-center flex text-lg text-gray-500 py-2 px-3 hover:text-white transition delay-300 transition delay-300 cursor-pointer rounded-tl-md rounded-bl-md hover:bg-red-200 bg-gray-200">-</button>
						<button className="items-center flex w-12">
							<p className="text-sm text-gray-500 mx-auto">{ arr ? arr : 0 }</p>
						</button>
						<button disabled={availability <= 0} onClick={() => handleQtyInc()} className="items-center flex text-lg text-gray-500 py-2 px-3 hover:text-white transition delay-300 transition delay-300 cursor-pointer rounded-tr-md rounded-br-md hover:bg-green-200 bg-gray-200">+</button>
					</div>
					<span className="flex space-x-3 text-sm items-center">
						<p className="text-gray-700 font-light">First published:</p>
						<p className="text-red-500 font-light hover:underline">{book.year}</p>
					</span>
					<span className="flex space-x-3 text-sm items-center">
						<p className="text-gray-700 font-light">{book.pages}</p>
						<p className="text-red-500 font-light hover:underline">pages, Hardcover</p>
					</span>
					<div className="flex flex-col space-y-4 my-8 w-1/2">
						<p className="text-gray-700 font-semibold text-md">This edition</p>
						<span className="flex items-center justify-between">
							<p className="text-gray-700 font-light text-sm">Format</p>
							<p className="text-gray-700 font-light text-sm">{book.pages} pages, Hardcover</p>
						</span>
						<span className="flex items-center justify-between">
							<p className="text-gray-700 font-light text-sm">Published</p>
							<p className="text-gray-700 font-light text-sm">{book.year} by {book.author}</p>
						</span>
						<span className="flex items-center justify-between">
							<p className="text-gray-700 font-light text-sm">ISBN</p>
							<p className="text-gray-700 font-light text-sm">{!book.isbn ? '9781982146863 (ISBN10: 1982146869)' : 'ISBN'+ book.isbn}</p>
						</span>
						<span className="flex items-center justify-between">
							<p className="text-gray-700 font-light text-sm">Language</p>
							<p className="text-gray-700 font-light text-sm">English</p>
						</span>
					</div>
					{/*<div className="flex flex-col space-y-4 border-b border-gray-700">
						<p className="text-gray-700 font-semibold text-md">About the Author</p>
					</div>*/}
				</div>
			</main>
			<BestSelling />
			<div className="flex border-t border-b border-gray-400 flex-col space-y-3 w-4/5 mx-auto my-12">
				<p className="text-gray-700 font-normal text-3xl">Ratings & Reviews</p>
				<div className="flex flex-col space-y-3 items-center justify-center">
					<img className="rounded-full h-12 w-12 bg-cover" src={book.photo} alt={book.photo} />
					<p className="text-gray-700 font-normal text-3xl">What do you think?</p>
					<div className="flex space-x-5 items-center">
						<div className="flex-col space-y-3">
							<span className="flex items-center cursor-pointer">
								<FaStar className="text-3xl text-red-500" />
								<FaStar className="text-3xl text-red-500" />
								<FaStar className="text-3xl text-red-500" />
								<FaStar className="text-3xl text-red-500" />
								<FaStarHalfStroke className="text-3xl text-red-500" />
							</span>
							<p className="text-gray-700 font-light text-xs">Rate this book</p>
						</div>
						<button className="bg-red-400 text-white rounded-full px-5 py-2">Write a Review</button>
					</div>
				</div>
			</div>
			{/*community Reviews*/}
			<div className="flex border-b border-gray-400 flex-col space-y-3 w-4/5 mx-auto my-6">
				<p className="text-gray-700 font-normal text-3xl">Community Reviews</p>
				<div className="flex flex-col space-y-3 justify-center w-full">
					<div className="flex space-x-5 items-center w-full">
						<div className="flex space-x-4 items-center">
							<span className="flex items-center cursor-pointer">
								<FaStar className="text-3xl text-red-500" />
								<FaStar className="text-3xl text-red-500" />
								<FaStar className="text-3xl text-red-500" />
								<FaStar className="text-3xl text-red-500" />
								<FaStarHalfStroke className="text-3xl text-red-500" />
							</span>
							<span className="flex items-center space-x-3">
								<p className="text-sm font-light text-gray-700">(120 Reviews)</p>
								<p className="text-sm font-light text-red-500">1,142 Ratings</p>
							</span>
						</div>
					</div>
					<div className="flex flex-col space-y-3 my-6 w-full">
						<span className="flex space-x-2 w-full">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">5 Star</p>
							<progress className="w-3/5 progress rounded-2xl" max="100" value="47"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">1,354 (47%)</p>
						</span>
						<span className="flex space-x-2">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">4 Star</p>
							<progress className="w-3/5 progress rounded-2xl" max="100" value="32"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">907 (32%)</p>
						</span>
						<span className="flex space-x-2">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">3 Star</p>
							<progress className="w-3/5 progress rounded-2xl" max="100" value="15"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">433 (15%)</p>
						</span>
						<span className="flex space-x-2">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">2 Star</p>
							<progress className="w-3/5 progress rounded-2xl" max="100" value="4"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">120 (4%)</p>
						</span>
						<span className="flex space-x-2">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">1 Star</p>
							<progress className="w-3/5 progress rounded-2xl" max="100" value="1"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">34 (1%)</p>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BookPage