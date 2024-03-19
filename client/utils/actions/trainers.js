import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createTrainer(request){

  const data = await formToObj(request)
  return await axios.post('/api/trainer/', data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      
    }
  })
}

export async function updateTrainer(request, id){

  const data = await formToObj(request)
  
  return await axios.patch(`/api/trainer/${id}/`, data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      
    }
  })
}

export async function deleteTrainer(id){
  await axios.delete(`/api/trainer/${id}/`, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      
    }
  })
  return redirect('/trainers/')
}
