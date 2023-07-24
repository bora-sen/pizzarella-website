import React, { useContext } from "react"
import { products } from "../../../dataset.json"
import { MainContext } from "../../../MainContext"
import { toast } from "react-hot-toast"

function Pizzas() {
  function handleAddCart(e, pizza) {
    e.preventDefault()
    dispatch({ type: "ADD_TO_CART", payload: pizza })
    toast.success(`${pizza.title} is added to Cart!`)
  }
  const { state, dispatch } = useContext(MainContext)
  return (
    <section className="w-full min-h-[50rem] py-12">
      <h5 className="text-center text-8xl font-bold mb-4">Pizzas</h5>
      <div className="flex flex-wrap gap-[5rem] items-baseline justify-center">
        {products.slice(0, 8).map((pizza, index) => {
          return (
            <div key={index} className="w-[20rem] p-2 bg-red-800">
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
                <div className="flex flex-wrap gap-2 mt-2">
                  {pizza.ingredients.map((ingredient, ingredientIndex) => {
                    return (
                      <span className="bg-black text-white rounded-2xl px-4 py-2" key={ingredientIndex}>
                        {ingredient}
                      </span>
                    )
                  })}
                </div>
              </div>
              <button onClick={(e) => handleAddCart(e, pizza)} className="bg-green-500 text-white font-bold px-4 py-2 rounded-3xl block ml-auto mt-3">
                Add To Cart!
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Pizzas
