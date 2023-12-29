import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"

const MoreBooks = () => {
	const [categories, setCategories] = useState([])
	const [books, setBooks] = useState([])
	// const 
	useEffect(() => {
		const getCategories = async() => {
			try {
				const response = await axios.get('http://localhost:5000/api/v1/categories/get-categories')
				if (response.status === 200) {
					setCategories(response.data.data)
					console.log(categories)
				}
			} catch(error) {
				console.error('❗Error fetching data❌:', error.message);
			}
		}
		getCategories()
	}, [])


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
		<section className="flex flex-col w-full gap-y-6 bg-white h-fit py-4">
			{/*title*/}

			
			{/*//NOVELS*/}
			<div className="w-4/5 mx-auto items-center">
				<div className="grid grid-cols-12 gap-x-4 flex justify-between items-center w-full">
					<span className="col-span-4 w-full">
						<p className="text-3xl font-semibold text-gray-700 text-center ">Latest Published items</p>
					</span>
					<div className="col-span-8 flex space-x-3 items-center">
						{categories.length > 0 && categories.slice(0, 5).map(category => (
							<span key={category._id} className="bg-red-500 text-white font-light text-center text-xs rounded-3xl px-5 py-2 hover:bg-white hover:border hover:border-red-500 hover:text-red-500 transition-all delay-400 cursor-pointer border border-red-400">{category.title}</span>
						))}
					</div>
				</div>
			</div>

			<div className="w-4/5 mx-auto items-center grid grid-cols-5 gap-x-4 gap-y-6 mb-12">
				{books && books.slice(6, 16).map(book => (
					<div key={book._id} className="flex flex-col space-y-1 h-96 w-48 shadow-2xl shadow-gray-200 rounded-md cursor-pointer hover:shadow-2xl hover:shadow-pink-300 transition-all delay-300">
						<img className="w-full h-72 bg-cover" src={book.photo} alt="" />
						<div className="flex flex-col space-y-.5 px-2">
							<p className="text-sm font-medium text-gray-700">{book.title.length > 20 ? book.title.slice(0, 20)+ '...' : book.title}</p>
							<p className="text-sm font-light text-gray-500">{!book.author ? "J. R Rain" : book.author}</p>
							<span className="flex items-center">
								<FaStar className="text-sm text-red-500" />
								<FaStar className="text-sm text-red-500" />
								<FaStar className="text-sm text-red-500" />
								<FaStar className="text-sm text-red-500" />
								<FaStarHalfStroke className="text-sm text-red-500" />
							</span>
							<span className="flex items-center justify-between">
								<p className="text-xs font-light text-gray-700">(120 Review)</p>
								<p className="text-lg font-light text-red-500">Ksh. {book.price}</p>
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default MoreBooks