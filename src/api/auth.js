import axios from "axios"

export async function Login(username, password) {
  const req = await axios.post(
    "https://dummyjson.com/auth/login",
    { username, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const resp = await req.data
  return resp
}
