import "./ApartmentPage.css"
import { DescriptionPanel } from '../DescriptionPanel'
import { ApartmentBanner } from "../ApartmentBanner";
import { ApartmentHeader } from "../ApartmentHeader";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function ApartmentPage() {
  
  const location = useLocation()
  const [flat, setFlat] = useState(null)
  useEffect(fetchApartmentData,[])

  function fetchApartmentData() {
    fetch("logements.json")
      .then((res)=> res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat)        
      })
      .catch(console.error)  
  }
  if (flat == null) return <div>Loading...</div>
  return (
    <div className='apartment-page'>
        <ApartmentBanner pictures={flat.pictures} />
        <ApartmentHeader flat={flat} />
        <div className='apartment__description__area'>
            <DescriptionPanel title="Description" content={flat.description}/>
            <DescriptionPanel title="Equipements" content={flat.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}/> 
        </div>
    </div>
  )
}

export default ApartmentPage
