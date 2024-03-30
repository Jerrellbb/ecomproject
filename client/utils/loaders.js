import axios from 'axios'
import { getUserId, getToken } from './helpers/common'

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

export async function getLatestTrainers(){
  const res = await axios.get('/api/trainer/')
  const trainers = res.data
 //sort trainers from highest to lowest id and select the 4 newest trainers added to db
  trainers.sort((a, b) => b.id - a.id)
  const latestTrainers = trainers.slice(0, 4)
  return latestTrainers

}

export async function allOrders(){
  const res = await axios.get('/api/orders/')
  
  return res.data
}

export async function singleOrder(id){
  const res = await axios.get(`/api/orders/${id}/`,{
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      
    }
  })
  return res.data
}