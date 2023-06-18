import React, { useEffect } from "react"
import Home from "./Home"

const IndexPage = () => {
  useEffect(() => {
    document.title = "Ionut Prilipceanu - Fotograf eveniment"
  }, [])
  return (
    <section>
      <Home />
    </section>
  )
}

export default IndexPage
