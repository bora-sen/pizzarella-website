import React from "react"
import { Header, MainContainer } from "../../Components"
import { Featured, Hero, Pizzas } from "./Sections"

function Home() {
  return (
    <MainContainer>
      <Header />
      <Hero />
      <Featured />
      <Pizzas />
    </MainContainer>
  )
}

export default Home
