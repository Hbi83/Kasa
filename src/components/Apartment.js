import React from 'react'
import "./Apartment.css"

function Apartment(props) {
  return (
    <div className="apartment">
      <img src={props.imageUrl} alt='' />
      <div className='apartment__subtitle'>{ props.title }</div>
    </div>
  )
}

export default Apartment
