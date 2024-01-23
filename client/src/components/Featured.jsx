import React, { useState, useEffect } from 'react'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
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
						<div key={book._id} className="flex items-center space-x-8">
							<div className="featured_div">
								<img className="w-full h-full bg-cover" src={book.photo} alt="" />
							</div>
							<div className="flex flex-col space-y-4 ">
								<p className="text-3xl font-semibold text-white">{book.title}</p>
								<p className="text-sm font-light text-white">By {book.author}</p>
								<p className="text-2xl font-semibold text-white">Ksh. {book.price}</p>
								<div className="flex space-x-3 items-center">
									<span className="flex items-center">
										<FaStar className="text-sm text-white" />
										<FaStar className="text-sm text-white" />
										<FaStar className="text-sm text-white" />
										<FaStar className="text-sm text-white" />
										<FaStarHalfStroke className="text-sm text-white" />
									</span>
									<p className="text-xs font-light text-white">(120 Review)</p>
								</div>
								<button className="featured_btn">View More</button>
							</div>
						</div>
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