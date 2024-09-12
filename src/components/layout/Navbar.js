import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src='logo.png' alt='Logo' />
      </div>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  )
}

export default Navbar
