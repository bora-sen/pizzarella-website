import React from "react"
import { useContext } from "react"
import { MainContext } from "../MainContext"

function Footer() {
  const { state } = useContext(MainContext)
  function handleCartShow(e) {
    e.preventDefault()
    console.log(state)
  }
  return (
    <div className="w-full bg-red-900 min-h-[22rem] flex gap-24 md:gap-0 flex-col md:flex-row px-4 items-center justify-between">
      <a className="font-display text-8xl font-bold" href="#">
        Pizzarella
      </a>
      <div className="flex gap-24 md:gap-0 flex-col md:flex-row items-center justify-center h-full px-8">
        <ul className="w-full flex flex-col gap-4">
          <li>
            <span className="text-2xl font-bold">Title</span>
          </li>
          <li>
            <span>option 1</span>
          </li>
          <li>
            <span>option 2</span>
          </li>
          <li>
            <span>option 3</span>
          </li>
        </ul>
        <ul className="w-full flex flex-col gap-2">
          <li>
            <span className="text-2xl font-bold">Address</span>
            <br />
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro sunt expedita, nisi quod repellendus, similique dolore quisquam repellat voluptas
              maxime totam beatae iusto reiciendis.
            </span>
          </li>
          <li>
            <span className="text-2xl font-bold">Contact</span>
            <br />
            <span>+90 555 55 55</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
