import React from 'react'
import "./ApartmentPage.css"

function ApartmentPage() {
  return (
    <div className='apartment-page'>
        <div>
            <img src='https://picsum.photos/800/400' alt='' />
        </div>
        <div className='apartment__title'>
            <h1>Crazy loft on Canal Saint Martin</h1>
            <h2>Paris, Ile de France</h2>
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
        </div>
        <div className='apartment__owner'>
            <h3>Alexandre Dumas</h3>
            <div className='apartment__owner__badge'></div>
            <div className='apartment__owner__stars'>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
        </div>
        <div className='apartment__description'>
            <p>Description</p>
            <p></p>
        </div>
        <div className='apartment__description'>
            <p>Description</p>
            <p></p>
        </div>       
    </div>
  )
}

export default ApartmentPage
