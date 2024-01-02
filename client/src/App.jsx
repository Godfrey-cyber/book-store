import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import LargeHeader from "./components/LargeHeader.jsx"
import SmallHeader from "./components/SmallHeader.jsx"
import MainSection from "./components/MainSection.jsx"
import BestSelling from "./components/BestSelling.jsx"
import Featured from "./components/Featured.jsx"
import MoreBooks from "./components/MoreBooks.jsx"
import InforSection from "./components/InforSection.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import BookPage from "./pages/BookPage.jsx"
import CartPage from "./pages/CartPage.jsx"
// import image from "./"
import './App.css'

function App() {

  return (
    <section className="bg-red-50 h-screen w-full scroll-smooth">
     <BrowserRouter>
	    <Routes>
	    	<Route path="/" element={<Home />} />
	    	<Route path="/book_details/:id" element={<BookPage />} />
	    	<Route path="/cart_page" element={<CartPage />} />
	    	{/*<SmallHeader />
	        <LargeHeader />
	        <MainSection />
	        <BestSelling />
	        <Featured />
	        <MoreBooks />
	        <InforSection />
	        <Footer />*/}
        </Routes>
    </BrowserRouter>
    </section>
  )
}

export default App
