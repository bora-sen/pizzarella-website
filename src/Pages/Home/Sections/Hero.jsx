import React from "react"

function Hero() {
  return (
    <section className="bg-[url(https://via.placeholder.com/1280x720)] bg-cover bg-center w-full min-h-[50rem] py-4 flex items-center">
      <div className="max-w-[45rem] ml-[5rem]">
        <h1 className="text-8xl font-bold">Get Your Pizzas!</h1>
        <p className="text-2xl mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ut sit hic dolore ullam voluptate adipisci vero esse maiores, eligendi doloribus
          omnis sunt fuga cum!
        </p>
        <a className="bg-black px-2 py-4 text-white rounded-2xl font-bold ">Get Your Pizza</a>
      </div>
    </section>
  )
}

export default Hero
