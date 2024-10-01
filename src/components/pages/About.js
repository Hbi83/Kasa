import React from 'react'
import { DescriptionPanel } from '../DescriptionPanel'
import "./About.css"
import Banner from '../Banner/Banner'

function About() {
  return (
    <>
    <Banner />
    <div className='about__container'>
      <DescriptionPanel />
      <DescriptionPanel />
      <DescriptionPanel />
      <DescriptionPanel />
    </div>
    </>
  )
}

export default About
