import axios from 'axios'
import { formToObj, removeToken } from '../helpers/common'
import { createCart, deleteCart } from './cart'

export async function registerUser(request){
  const data = await formToObj(request)
  return await axios.post('/api/auth/register/', data, {
    validateStatus: () => true
  })
}





export async function signOutUser(){
  deleteCart()
  removeToken()
}


export async function loginUser(request) {
  try {
    const data = await formToObj(request)
    
    
    const response = await axios.post('/api/auth/login/', data, {
      validateStatus: () => true,
    });

    if (response.status === 200)setTimeout(async ()=>{
      
      await createCart()
    }, 2000)

    return response
  } catch (error) {
    
    console.error('Error logging in:', error)
    throw error
  }
}