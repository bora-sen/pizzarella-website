import React, { useContext} from "react"
import { MainContext } from "../MainContext"

function Header() {
  const {state} = useContext(MainContext)
  function handleCartShow(e) {
    e.preventDefault()
    console.log(state)
  }
  return (
    <div className="w-full bg-white sticky top-0 min-h-[5rem] flex px-4 items-center justify-between">
      <a className="font-display text-4xl font-bold" href="#">
        Pizzarella
      </a>
      <ul>
        <li>
          <a href="#">Get Your Pizza!</a>
        </li>
        <li>
          <button onClick={(e) => handleCartShow(e)}>Show Cart</button>
        </li>
      </ul>
    </div>
  )
}

export default Header
