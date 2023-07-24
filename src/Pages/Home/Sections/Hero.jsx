import React from "react"

function Hero() {
  return (
    <section className="text-white bg-[url(/assets/images/pizza-hero.jpg)] bg-cover bg-center w-full min-h-[50rem] py-4 flex items-center">
      <div className="max-w-[42rem] ml-[5rem] backdrop-blur-sm backdrop-brightness-50 p-4">
        <h1 className="text-8xl font-bold">Get Your Pizzas!</h1>
        <p className="text-2xl mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ut sit hic dolore ullam voluptate adipisci vero esse maiores, eligendi doloribus
          omnis sunt fuga cum!
        </p>
        <a href="#" className="my-4 bg-white px-2 py-4 text-black rounded-2xl font-bold ">
          Get Your Pizza
        </a>
      </div>
    </section>
  )
}

export default Hero
