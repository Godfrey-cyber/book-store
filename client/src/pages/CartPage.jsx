import React from 'react'
import SmallHeader from "../components/SmallHeader"
import { FaRegHeart } from "react-icons/fa";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import LargeHeader from "../components/LargeHeader"
import { useDispatch, useSelector } from 'react-redux'
import { addBook, items, getTotal, getCartCount, totalCartCount } from '../Redux/Slices/cartSlice'

const CartPage = () => {
	const dispatch = useDispatch()
	const books = useSelector(items)
	 const cartTotal = useSelector(totalCartCount)
	console.log(books)
	return (
		<section className="w-full h-[100vh]">
			<SmallHeader />
			<LargeHeader />
			<main className="grid grid-cols-12 gap-8 w-4/5 mx-auto">
				<div className="col-span-8 h-96 my-2  space-y-4">
					<p className="text-sm font-semibold text-gray-700 my-4">You have {(books.length)} books in your cart</p>
					{books && books?.map(book => (
						<div key={book._id} className="grid grid-cols-12 gap-x-8">
							<div className="col-span-4 h-44 w-28 flex-col">
								<img className="h-full w-full bg-contain" src={book.photo} alt="" />
							</div>
							<div className="col-span-6 flex-col">
								<p className="text-sm font-light text-gray-700">{book.title}</p>
							</div>
							<div className="col-span-2 flex-col">
								<FaRegHeart className="text-lg text-red-400" />
							</div>
						</div>
					))}
				</div>
				<div className="col-span-4 h-96 my-2 bg-red-400 flex-col space-y-4">

				</div>
			</main>
		</section>
	)
}

export default CartPage