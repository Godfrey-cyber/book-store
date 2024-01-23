import React from 'react'
import { useNavigate } from "react-router-dom"

const Book = ({ _id, photo, title, author, price }) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate(`/book_details/${book._id}`)} key={book._id} className="best_div group">
			<img className="best_img group-hover:rounded-t-md" src={book.photo} alt="" />
			{/*<span onClick={addBookToCart} className={`hidden ${checkBookAvailability(book._id) >= 0 ? 'bg-green-500' : ''} group-hover:inline absolute z-10 text-white bg-red-500 rounded-bl-full p-2 text-center items-center flex -top-1 right-0 group-hover:rounded-tr-md transition-all delay-300`}>
				<MdAddShoppingCart className="text-lg ml-1" />
			</span>q*/}
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
	)
}

export default Book