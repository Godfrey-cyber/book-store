import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
import Book from "./Book.jsx"

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
				}
			} catch(error) {
				if (!response.status === 200 || !response.statusText === 'OK') {
					console.error('❗Error fetching data❌:', error.message);
				}
			}
		}
		getBooks()
	}, [])
	return (
		<section className="flex flex-col w-full gap-y-6 bg-white h-fit py-4">
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
					<Book key={book._id} book={book} />
				))}
			</div>
		</section>
	)
}

export default MoreBooks