import React from 'react'
import SmallHeader from "../components/SmallHeader.jsx"
import LargeHeader from "../components/LargeHeader.jsx"
import { useNavigate } from 'react-router-dom'

const SellBook = () => {
	return (
		<section className="w-full h-full bg-white">
			<SmallHeader />
			<LargeHeader />
			<div className="px-20 mt-6">Upload your books here</div>
		</section>
	)
}

export default SellBook