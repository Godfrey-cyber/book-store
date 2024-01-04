import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
import BestSelling from "../components/BestSelling.jsx"
import axios from 'axios'
import SmallHeader from "../components/SmallHeader"
import LargeHeader from "../components/LargeHeader"

const BookPage = () => {
	const [book, setBook] = useState([])
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	console.log(id)
	// console.log(location)
	useEffect(() => {
		const getBook = async() => {
			try {
				const response = await axios.get(`http://localhost:5000/api/v1/books/getBook/${id}`)
				if (response.status === 200) {
					setBook(response.data.data)
					console.log(book)
				} else {
					console.log('error')
				}
			} catch(error) {
				console.error('❗Error fetching data❌:', error.message);
			}
		}
		getBook()
	}, [])
	return (
		<section className="w-full h-full bg-white">
			<SmallHeader />
			<LargeHeader />
			<main className="grid grid-cols-12 gap-x-8 w-4/5 mx-auto my-12 h-fit">
				<div className="col-span-3 flex flex-col space-y-4 h-full">
					<img className="w-full h-96 my-6 bg-cover group-hover:rounded-t-md transition-all delay-400" src={book.photo} alt="" />
					<button className="text-sm text-white font-semibold bg-red-400 border border-red-300 hover:bg-white hover:text-red-400 transition-all delay-400 rounded-3xl px-3 py-2">Read</button>
					<button className="text-sm text-red-400 font-semibold bg-white border border-red-300 hover:bg-red-400 hover:text-white transition-all delay-400 rounded-3xl px-3 py-2">Buy this book</button>
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
					<button className="text-sm text-red-400 font-semibold bg-white border border-red-300 hover:bg-red-400 hover:text-white transition-all delay-400 w-2/5 rounded-md px-3 py-2">Add to cart</button>
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
							<p className="text-gray-700 font-light text-sm">9781982146863 (ISBN10: 1982146869)</p>
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
							<progress className="w-3/5 rounded-2xl" max="100" value="47"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">1,354 (47%)</p>
						</span>
						<span className="flex space-x-2">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">4 Star</p>
							<progress className="w-3/5 rounded-2xl" max="100" value="32"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">907 (32%)</p>
						</span>
						<span className="flex space-x-2">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">3 Star</p>
							<progress className="w-3/5 rounded-2xl" max="100" value="15"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">433 (15%)</p>
						</span>
						<span className="flex space-x-2">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">2 Star</p>
							<progress className="w-3/5 rounded-2xl" max="100" value="4"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">120 (4%)</p>
						</span>
						<span className="flex space-x-2">
							<p className="text-sm font-semibold text-gray-700 hover:underline cursor-pointer">1 Star</p>
							<progress className="w-3/5 rounded-2xl" max="100" value="1"></progress>
							<p className="text-xs font-light text-gray-700 hover:underline cursor-pointer">34 (1%)</p>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BookPage