import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'

export async function createTrainer(request){

  const data = await formToObj(request)
  return await axios.post('/api/trainer/', data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      
    }
  })
}
