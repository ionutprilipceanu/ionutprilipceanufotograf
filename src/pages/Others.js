import React from "react"
import Title from "..//components/title/Title"
import Others from "..//components/portofolioComponent/others/Others"
import Subnavbarmenu from "..//components/navbarmenu/subnavbarmenu/subnavbarmenu"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      <div className="others">
        <Title title="Diverse" />
      </div>
      <Subnavbarmenu />
      <Others />
      <Footer />
    </div>
  )
}
