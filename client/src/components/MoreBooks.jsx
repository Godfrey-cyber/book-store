import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"

const MoreBooks = () => {
	const [categories, setCategories] = useState([])
	const [books, setBooks] = useState([])
	const navigate = useNavigate()
	// const 
	useEffect(() => {
		const getCategories = async() => {
			try {
				const response = await axios.get('http://localhost:5000/api/v1/categories/get-categories')
				if (response.status === 200) {
					setCategories(response.data.data)
					// console.log(categories)
				}
			} catch(error) {
				if (!response.status === 200 || !response.statusText === 'OK') {
					console.error('❗Error fetching data❌:', error.message);
					// console.log(categories)
				}
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
					// console.log(books)
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
				<div className="flex justify-between bg-red-transparent items-center w-full py-4">
					<span className="">
						<p className="text-2xl font-semibold text-gray-700 text-center ">Latest Published items</p>
					</span>
					<div className="flex space-x-2 items-center">
						{categories.length > 0 && categories.slice(0, 5).map(category => (
							<span key={category._id} className="category_span">{category.title}</span>
						))}
					</div>
				</div>
			</div>

			<div className="w-4/5 mx-auto items-center grid grid-cols-5 gap-x-4 gap-y-6 mb-12">
				{books && books.slice(6, 16).map(book => (
					<div onClick={() => navigate(`/book_details/${book._id}`)} key={book._id} className="morebooks_div">
						<img className="w-full h-72 bg-cover" src={book.photo} alt="" />
						<div className="flex flex-col space-y-.5 px-2">
							<p className="text-sm font-medium text-gray-700">{book.title.length > 20 ? book.title.slice(0, 20)+ '...' : book.title}</p>
							<p className="text-sm font-light text-gray-500">{!book.author ? "J. R Rain" : book.author}</p>
							<span className="flex items-center">
								<FaStar className="best_icons" />
								<FaStar className="best_icons" />
								<FaStar className="best_icons" />
								<FaStar className="best_icons" />
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