import axios from "axios";

export async function getUserCart(userId){ 
    const cart = await axios.get(`https://dummyjson.com/users/${userId}/carts`) ?? false
    const cartObj = await cart.data.carts[0]
    return cartObj
}