import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ApartmentGrid from './components/ApartmentGrid'
import Footer from './components/Footer'
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />    
      <Banner />
      <ApartmentGrid /> 
      <Footer />   
    </div>
  )
}

export default App
