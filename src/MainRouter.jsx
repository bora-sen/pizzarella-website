import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages"

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Home />} />
    </Routes>
  )
}

export default MainRouter
