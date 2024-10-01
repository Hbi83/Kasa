import React from 'react'
import "./ApartmentPage.css"
import { DescriptionPanel } from '../DescriptionPanel'
import { ApartmentBanner } from "../ApartmentBanner";
import { ApartmentHeader } from "../ApartmentHeader";

function ApartmentPage() {
  return (
    <div className='apartment-page'>
        <ApartmentBanner />
        <ApartmentHeader />
        <div className='apartment__description__area'>
            <DescriptionPanel />
            <DescriptionPanel /> 
        </div>
    </div>
  )
}

export default ApartmentPage
