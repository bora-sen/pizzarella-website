import React, { useContext } from "react"
import { Login } from "../../../api/auth"
import { MainContext } from "../../../MainContext"
import { useNavigate } from "react-router-dom"

function LoginForm() {
  const { dispatch } = useContext(MainContext)
  const navigate = useNavigate()
  async function handleLogin(e) {
    e.preventDefault()
    const username = document.getElementById("username_input").value
    const password = document.getElementById("password_input").value
    const loginResponse = await Login(username,password)
    console.log(loginResponse)
    dispatch({ type: "CONTEXT_LOGIN_UPDATE", payload: loginResponse })
    console.log("dispatch run")
    navigate("/")
  }
  return (
    <form onSubmit={(e) => handleLogin(e)} className="bg-red-400 min-w-[20rem] p-4 rounded-md">
      <div className="grid">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username_input" className="text-black" />
      </div>
      <div className="grid">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password_input" className="text-black" />
      </div>
      <button>Login</button>
    </form>
  )
}

export default LoginForm
