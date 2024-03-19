import { getToken, formToObj } from "../helpers/common"
import axios from "axios"

export async function createCart(){
try {
  const token = getToken()
  const response = await axios.post('/api/basket/', null, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${token}`,
      
    }
  })
  localStorage.setItem('cart', JSON.stringify(response.data))
  return response
} catch (error) {
  console.error('Error creating cart:', error);
    throw error;
}

}

export async function deleteCart(){
  const cartData = JSON.parse(localStorage.getItem('cart'))
  await axios.delete(`/api/basket/${cartData.id}/`,{
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  localStorage.removeItem('cart')
  
}

export async function updateCart(request){
  const cartData = JSON.parse(localStorage.getItem('cart'))
  
  const data = await formToObj(request)
  const res = await axios.patch(`/api/basket/${cartData.id}/`, data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`

    }
  })
  localStorage.setItem('cart', JSON.stringify(res.data))
  
  return res
}