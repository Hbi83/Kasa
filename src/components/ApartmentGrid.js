import React, { useEffect, useState } from 'react'
import "./ApartmentGrid.css"
import Apartment from "./Apartment"


function AppartmentGrid() {
  const [apartments, setApartments] = useState([])

  useEffect(fetchApartments, [])

  function fetchApartments() {
    fetch("logements.json")
      .then((res)=> res.json())
      .then((res) => setApartments(res))
      .catch(console.error)  
  }

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <Apartment key={apartment.id} title={apartment.title} imageUrl={apartment.cover} />
      ))}
    </div>
  )
}

export default AppartmentGrid
