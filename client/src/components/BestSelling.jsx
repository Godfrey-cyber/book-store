import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"

const BestSelling = () => {
	const [books, setBooks] = useState([])
	// const 
	useEffect(() => {
		const getBooks = async() => {
			try {
				const response = await axios.get('http://localhost:5000/api/v1/books/getAllBooks')
				if (response.status === 200) {
					setBooks(response.data.data)
					console.log(books)
				}
			} catch(error) {
				console.error('❗Error fetching data❌:', error.message);
			}
		}
		getBooks()
	}, [])
	return (
		<section className="flex flex-col w-full">
			{/*title*/}
			<p className="text-3xl font-semibold text-gray-700 text-center my-24">Best Selling Books Ever</p>
			{/*//NOVELS*/}
			<div className="w-4/5 mx-auto items-center grid grid-cols-5 gap-4">
				{books.length && books.slice(0, 5).map(book => (
					<div key={book._id} className="flex flex-col space-y-1 h-96 w-48 shadow-2xl shadow-gray-200 rounded-md cursor-pointer hover:shadow-2xl hover:shadow-pink-300 transition-all delay-300">
						<img className="w-full h-64 bg-cover" src={book.photo} alt="" />
						<div className="flex flex-col space-y-2 px-2">
							<p className="text-sm font-medium text-gray-700">{book.title.length > 24 ? book.title.slice(0, 24)+ '...' : book.title}</p>
							<p className="text-sm font-light text-gray-500">{!book.author ? "J. R Rain" : book.author}</p>
							<span className="flex items-center space-x-1">
								<FaStar className="text-sm text-red-500" />
								<FaStar className="text-sm text-red-500" />
								<FaStar className="text-sm text-red-500" />
								<FaStar className="text-sm text-red-500" />
								<FaStarHalfStroke className="text-sm text-red-500" />
							</span>
							<span className="flex items-center justify-between">
								<p className="text-xs font-light text-gray-700">(120 Review)</p>
								<p className="text-xl font-normal text-red-500">Ksh. {book.price}</p>
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default BestSelling