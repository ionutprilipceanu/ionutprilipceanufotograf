import React from "react"
import Title from "..//components/title/Title"
import CardEvent from "..//components/cardEvent/CardEvent"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"
import "..//components/style.css"

export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      <div className="portfolio">
        <Title title="Portofoliu" />
      </div>
      <CardEvent />
      <Footer />
    </div>
  )
}
