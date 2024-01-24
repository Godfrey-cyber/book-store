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
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import SellBook from "./pages/SellBook.jsx"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
	
  return (
    <section className="min-h-screen font-['Montserrat'] h-auto w-full scroll-smooth">
    <ToastContainer />
     <BrowserRouter>
	    <Routes>
	    	<Route path="/" element={<Home />} />
	    	<Route path="/book_details/:id" element={<BookPage />} />
	    	<Route path="/cart_page" element={<CartPage />} />
	    	<Route path="/log_in" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
	    	<Route path="/upload_book" element={<SellBook />} />
        </Routes>
    </BrowserRouter>
    </section>
  )
}

export default App
