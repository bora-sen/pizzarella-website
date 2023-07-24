import React from "react"
import { featuredProducts } from "../../../dataset.json"

function Featured() {
  return (
    <section className="w-full min-h-[50rem] py-12">
      <h2 className="text-7xl font-bold text-center mb-4">Featured Pizzas</h2>
      <div className="flex gap-[5rem] justify-evenly items-center">
        {featuredProducts.map((pizza, index) => {
          return (
            <div key={index} className="w-full h-full">
              <div className="aspect-[2/3] overflow-hidden">
                <img className="w-full h-full object-cover object-center" src={pizza.image} alt="pizza" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Featured
