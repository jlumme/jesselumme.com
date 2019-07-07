import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children, data }) => (
  <div>
    <Header data={data} />
    {children}
    <Footer />
  </div>
)
