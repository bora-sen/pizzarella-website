import { createContext, useReducer } from "react"

export const MainContext = createContext()
export function MainContextProvider({ children }) {
  const REDUCER_INITIAL_VALUE = {
    lang: "en",
    cart: [],
  }

  function MainReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
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
