import React from "react"
import { featuredProducts } from "../../../dataset.json"

function Featured() {
  return (
    <section className="w-full min-h-[50rem] bg-red-200 py-12">
        <h2 className="text-7xl font-bold text-center mb-4">Featured Pizzas</h2>
      <div className="bg-blue-200 flex gap-[5rem] justify-evenly items-center">
        {featuredProducts.map((pizza, index) => {
          return (
            <div key={index} className="">
              <div className="w-full overflow-hidden">
                <img className="object-center object-cover w-full h-full" src={pizza.image} alt="pizza" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Featured
