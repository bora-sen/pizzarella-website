import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import MainRouter from "./MainRouter"
import { MainContextProvider } from "./MainContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <MainRouter />
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
