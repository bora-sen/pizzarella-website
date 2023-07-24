import React from "react"
import { Toaster } from "react-hot-toast"
import Header from "./Header"
import Footer from "./Footer"

function MainContainer({ children }) {
  return (
    <main className="px-2 overflow-x-hidden">
      <Header />
      <Toaster />
      {children}
      <Footer />
    </main>
  )
}

export default MainContainer
