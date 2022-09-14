import React from "react"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"

const Layout = (props: {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}) => {
  return (
    <div>
      <Navigation />
      <div className="container max-w-2lg mr-auto ml-auto">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
