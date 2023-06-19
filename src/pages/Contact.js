import React from "react"
import ContactForm from "..//components/contactForm/ContactForm"
import Title from "..//components/title/Title"
import Navbarmenu from "..//components/navbarmenu/Navbarmenu"
import Footer from "..//components/footer/Footer"

const Contact = () => {
  return (
    <div>
      <Navbarmenu />
      <div className="contact">
        <Title title="Contact" subTitle="" />
      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
