import { useState } from 'react'
import LargeHeader from "./components/LargeHeader.jsx"
import SmallHeader from "./components/SmallHeader.jsx"
import MainSection from "./components/MainSection.jsx"
import BestSelling from "./components/BestSelling.jsx"
import Featured from "./components/Featured.jsx"
import MoreBooks from "./components/MoreBooks.jsx"
import InforSection from "./components/InforSection.jsx"
import Footer from "./components/Footer.jsx"
// import image from "./"
import './App.css'

function App() {

  return (
    <section className="bg-red-50 h-screen w-full ">
    	<SmallHeader />
        <LargeHeader />
        <MainSection />
        <BestSelling />
        <Featured />
        <MoreBooks />
        <InforSection />
        <Footer />
    </section>
  )
}

export default App
