
import { formToObj, getToken  } from "../helpers/common"
import axios from "axios"


export async function updateFulfilledOrder(request, id){

  const data = await formToObj(request)
  
  return await axios.patch(`/api/orders/${id}/`, data, {
    validateStatus : () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      
    }
  })
}