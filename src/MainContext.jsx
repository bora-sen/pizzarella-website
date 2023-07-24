import { createContext, useReducer } from "react"

export const MainContext = createContext()
export function MainContextProvider({ children }) {
  const REDUCER_INITIAL_VALUE = {
    lang: "en",
    cart: [],
    user: JSON.parse(window.localStorage.getItem("pizzarella_user"))  ?? false ,
    isLogged: window.localStorage.getItem("pizzarella_isLogged") ?? false,
  }

  function MainReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      case "CONTEXT_LOGIN_UPDATE":
        window.localStorage.setItem("pizzarella_isLogged", true)
        window.localStorage.setItem("pizzarella_user", JSON.stringify(action.payload))
        return {
          ...state,
          isLogged: true,
          user: action.payload,
        }
      case "CONTEXT_LOGOUT":
        window.localStorage.removeItem("pizzarella_isLogged")
        window.localStorage.removeItem("pizzarella_user")

        return {
          ...state,
          isLogged: false,
          user: false,
        }
    }
  }
  const [state, dispatch] = useReducer(MainReducer, REDUCER_INITIAL_VALUE)

  const data = {
    state,
    dispatch,
  }
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>
}
