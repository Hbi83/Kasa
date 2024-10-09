import React from 'react'
import { DescriptionPanel } from '../DescriptionPanel'
import "./About.css"
import Banner from '../Banner/Banner'

function About() {
  return (
    <>
    <Banner />
    <div className='about__container'>
      <DescriptionPanel title="Fiabilité" content ="Les annonces postées sue Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierements vérifiées par nos équipes" />
      <DescriptionPanel title="Respect" content ="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme" />
      <DescriptionPanel title="Service" content ="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit enpreinte de respect et de bienveillance" />
      <DescriptionPanel title="Sécurité" content ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes" />
    </div>
    </>
  )
}

export default About
