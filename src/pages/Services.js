import React from "react"
import Title from "..//components/title/Title"

import Servicing from "..//components/servicing/Servicing"
import servicing from "..//assets/images/servicing/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-9.3.jpg"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"
import "..//components/style.css"

export default function Services() {
  return (
    <div>
      <Navbarmenu />
      <img src={servicing} alt="logo" style={{ width: "100%" }} />
      <div className="services">
        <Title title="Servicii" />
      </div>
      <Servicing />
      <Footer />
    </div>
  )
}
