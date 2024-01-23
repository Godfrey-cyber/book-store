import React, { useState, useEffect } from 'react'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
import Book from "./Book.jsx"
import axios from 'axios'

const Featured = () => {
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
				if (error || !res.status === 200 || !res.statusText === 'OK') {
					console.log(error)
				}
			}
		}
		getBooks()
	}, [])
	return (
		<section className="h-[66vh] w-4/5 mx-auto my-24">
			<div className="grid grid-cols-12 gap-6 h-4/5">
				<div className="col-span-8 bg-red-500 p-4 flex space-x-4 items-center">
					{books && books.slice(0, 1).map(book => (
						<Book book={book} />
					))}
				</div>
				<div className="col-span-4 bg-contain p-2">
					<img className="w-full h-full bg-cover" src="https://enterprisersproject.com/sites/default/files/2020_book_list.png" alt="" />
				</div>
			</div>
		</section>
	)
}

export default Featured