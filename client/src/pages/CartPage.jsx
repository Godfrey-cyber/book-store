import React from 'react'
import SmallHeader from "../components/SmallHeader"
import LargeHeader from "../components/LargeHeader"
import { useDispatch, useSelector } from 'react-redux'
import { addBook, items, getTotal, getCartCount } from '../Redux/Slices/cartSlice'

const CartPage = () => {
	const dispatch = useDispatch()
	const cart_items = useSelector(state => state.cart.books)
	const books = useSelector(items)
	console.log(cart_items)
	console.log(books)
	return (
		<section className="w-full h-[80vh]">
			<SmallHeader />
			<LargeHeader />
			<main className="grid grid-cols-12 gap-8 w-4/5 mx-auto">
				<div className="col-span-8 h-96 my-2 bg-red-400 flex-col space-y-4">

				</div>
				<div className="col-span-4 h-96 my-2 bg-red-400 flex-col space-y-4">

				</div>
			</main>
		</section>
	)
}

export default CartPage