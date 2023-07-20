import React, { useContext} from "react"
import { products } from "../../../dataset.json"
import { MainContext } from "../../../MainContext"

function Pizzas() {
  const {state,dispatch} = useContext(MainContext)
  return (
    <section className="w-full min-h-[50rem] bg-red-200 py-12">
      <div className="bg-blue-200 flex flex-wrap gap-[5rem] items-baseline justify-center">
        {products.slice(0,8).map((pizza, index) => {
          return (
            <div key={index} className="w-[20rem] p-2 bg-yellow-200">
              <div className="w-full overflow-hidden">
                <img className="object-center object-cover w-full h-full" src={pizza.image} alt="pizza" />
              </div>
              <div className="flex justify-between items-center">
                <h5 className="font-bold text-xl">{pizza.title}</h5>
                <span className="font-bold text-lg">{pizza.price}$</span>
              </div>
              <span>{pizza.description}</span>
              <div className="mt-2">
                <span className="text-xl">Ingredients:</span>
                <div className="bg-green-400 flex flex-wrap gap-2 mt-2">
                  {pizza.ingredients.map((ingredient, ingredientIndex) => {
                    return (
                      <span className="bg-black text-white rounded-2xl px-4 py-2" key={ingredientIndex}>
                        {ingredient}
                      </span>
                    )
                  })}
                </div>
              </div>
              <button onClick={e => {e.preventDefault();dispatch({type:"ADD_TO_CART",payload:pizza})}} className="bg-red-500 text-white font-bold px-4 py-2 rounded-3xl block ml-auto mt-3">Add To Cart!</button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Pizzas
