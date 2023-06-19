import React from "react"
import Title from "..//components/title/Title"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"
import "..//components/style.css"

export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      <div className="displayNone">
        <Title title="Politici de confidențialitate" />
      </div>
      <Footer />
    </div>
  )
}
