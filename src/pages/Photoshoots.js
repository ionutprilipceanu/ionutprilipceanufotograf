import React from "react"
import Title from "..//components/title/Title"
import Photoshoots from "..//components/portofolioComponent/photoshoots/Photoshoots"
import Subnavbarmenu from "..//components/navbarmenu/subnavbarmenu/subnavbarmenu"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      <div className="photoshoots">
        <Title title="Ședințe foto" />
      </div>
      <Subnavbarmenu />
      <Photoshoots />
      <Footer />
    </div>
  )
}
