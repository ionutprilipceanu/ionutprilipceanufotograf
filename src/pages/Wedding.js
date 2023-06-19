import React from "react"
import Title from "..//components/title/Title"
import Wedding from "..//components/portofolioComponent/wedding/Wedding"
import Subnavbarmenu from "..//components/navbarmenu/subnavbarmenu/subnavbarmenu"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      <div className="weeding">
        <Title title="Nuntă" />
      </div>
      <Subnavbarmenu />
      <Wedding />
      <Footer />
    </div>
  )
}
