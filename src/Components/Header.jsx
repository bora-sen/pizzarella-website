import React, { useContext } from "react"
import { MainContext } from "../MainContext"
import { NavLink } from "react-router-dom"
import { getUserCart } from "../api/getCart"

function Header() {
  const { state, dispatch } = useContext(MainContext)

  async function handleCartShow(e) {
    e.preventDefault()
    console.log(state)
    console.log( await getUserCart(state.user.id));
  }
  function handleLogout(e){
    e.preventDefault()
    dispatch({type:"CONTEXT_LOGOUT"})

  }
  return (
    <div className="w-full bg-black sticky top-0 min-h-[5rem] flex px-4 items-center justify-between">
      <NavLink className="font-display text-4xl font-bold" to="/">
        Pizzarella
      </NavLink>
      <ul className="flex items-center gap-4 justify-center">
        {state.isLogged ? (
          <>
            <li>{state.user.username}</li>
            <li>
              <button onClick={e => handleLogout(e)}>
                Logout
              </button>
            </li>

            <li>
              <NavLink to="/checkout">Checkout</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
        <li>
          <button onClick={(e) => handleCartShow(e)}>
            <svg
              className="transition-colors fill-white hover:fill-black hover:bg-white rounded-full p-2"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.25 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
              <path d="M18.75 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
              <path d="M7.865 14.25h12.25l1.8-9H6.276L5.88 3H1.5v1.5h3.12l2.25 12.75h13.38v-1.5H8.13l-.265-1.5Z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Header
