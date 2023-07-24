import React, { useContext } from "react"
import { Footer, Header } from "../../Components"
import { MainContext } from "../../MainContext"

function Checkout() {
  const { state } = useContext(MainContext)
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-col lg:flex-row">
        <section className="w-full bg-red-300 flex flex-col justify-evenly items-center">
            <span className="font-display text-7xl">Cart</span>
            <div className="grid gap-4">
            {
                state.cart.map((cartItem,index) => {
                    return (
                        <div key={index} className="flex gap-4 items-center justify-between max-w-[50rem]">
                            <div className="max-w-[20rem]">
                                <img src={cartItem.image} alt="pizza" />
                            </div>
                            <span className="text-2xl">{cartItem.title}</span>
                            <span className="text-4xl font-bold">{cartItem.price}$</span>

                        </div>
                    )
                })
            }

            </div>
        </section>
        <section className="w-full bg-green-300 flex items-center justify-center">
          <form action="#" className="">
            <div className="grid">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name_input" />
            </div>
            <div className="grid">
              <label htmlFor="mail">E-Mail</label>
              <input type="text" name="mail" id="mail_input" />
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Checkout
