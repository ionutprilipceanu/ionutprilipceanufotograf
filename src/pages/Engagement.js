import React from "react"
import Title from "..//components/title/Title"
import Engagement from "..//components/portofolioComponent/engagement/Engagement"
import Subnavbarmenu from "..//components/navbarmenu/subnavbarmenu/subnavbarmenu"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"
export default function Portfolio() {
  return (
    <div>
      <Navbarmenu />
      <div className="engagement">
        <Title title="Logodnă" />
      </div>
      <Subnavbarmenu />
      <Engagement />
      <Footer />
    </div>
  )
}
