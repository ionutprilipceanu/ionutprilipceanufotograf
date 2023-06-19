import React from "react"
import "./Loader.css"
import ReactLoading from "react-loading"

const Loader = () => {
  return (
    <ReactLoading
      type="spinningBubbles"
      color="#000"
      height={"10%"}
      width={"10%"}
      className={"space"}
    />
  )
}

export default Loader
