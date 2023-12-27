import { useState } from 'react'
import LargeHeader from "./components/LargeHeader.jsx"
import SmallHeader from "./components/SmallHeader.jsx"
import MainSection from "./components/MainSection.jsx"
import BestSelling from "./components/BestSelling.jsx"
// import image from "./"
import './App.css'

function App() {

  return (
    <section className="bg-gray-100 h-screen w-screen">
    	<SmallHeader />
        <LargeHeader />
        <MainSection />
        <BestSelling />
    </section>
  )
}

export default App
