import axios from 'axios'

export async function getAllTrainers(){
  const res = await axios.get('/api/trainer/')
  return res.data
}
export async function getCart(id){
  const res = await axios.get(`/api/basket/${id}`)
  return res.data
}