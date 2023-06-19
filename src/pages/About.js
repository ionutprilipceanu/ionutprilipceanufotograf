import React from "react"
import Title from "..//components/title/Title"
import { AboutComponent } from "..//components/about/AboutComponent"
import logo from "..//assets/images/about/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-1.1.jpg"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"
import "..//components/style.css"

export default function About() {
  return (
    <div>
      <Navbarmenu />
      <div className="about">
        <Title title="Despre" />
      </div>
      <img src={logo} alt="logo" style={{ width: "100%" }} />
      <AboutComponent />
      <Footer />
    </div>
  )
}
