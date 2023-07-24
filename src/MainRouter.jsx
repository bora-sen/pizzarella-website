import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages"
import Login from "./Pages/Login"
import Checkout from "./Pages/Checkout"

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default MainRouter
