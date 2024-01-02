import React from 'react'
import MainSection from '../components/MainSection.jsx'
import BestSelling from '../components/BestSelling.jsx'
import MoreBooks from '../components/MoreBooks.jsx'
import InforSection from '../components/InforSection.jsx'
import Footer from '../components/Footer.jsx'
import SmallHeader from '../components/SmallHeader.jsx'
import LargeHeader from '../components/LargeHeader.jsx'
import Featured from '../components/Featured.jsx'

const Home = () => {
	return (
		<div className="flex flex-col">
			<div className="sticky top-0 left-0 z-10 w-full">
				<SmallHeader />
				<LargeHeader />
			</div>
			<MainSection />
			<BestSelling />
			<Featured />
			<MoreBooks />
			<InforSection />
			<Footer />
		</div>
	)
}

export default Home