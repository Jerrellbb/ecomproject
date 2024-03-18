import axios from 'axios'
import { getUserId } from './helpers/common'
export async function getAllTrainers(){
  const res = await axios.get('/api/trainer/')
  return res.data
}
export async function singleTrainer(id){
  const res = await axios.get(`/api/trainer/${id}/`)
  
  return res.data
}
export async function getCart(id){
  const res = await axios.get(`/api/basket/${id}/`)
  return res.data
}

export async function getShippingAddress(id){
  const res = await axios.get(`/api/payment/${id}/`)
  return res.data
}

export async function getProfile(){
  const userId = await getUserId()
  console.log(userId)
  const res = await axios.get(`/api/auth/${userId}/`)
  return res.data
}
