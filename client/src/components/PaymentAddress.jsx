import { useState } from 'react'
import axios from 'axios'
import { getToken, cartId} from '../../utils/helpers/common'
import { useNavigate } from 'react-router-dom'

export default function ShippingAddressForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    full_name: '',
    address1: '',
    address2: '',
    country: '',
    city: '',
    postcode: ''
  })


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function CreateShippingAddress(e){
    e.preventDefault()
      
      try {
          await axios.post('/api/payment/', formData, {
          validateStatus : () => true,
          headers: {
            Authorization: `Bearer ${getToken()}`,
          }
        })
        navigate(`/basket/${cartId()}`)
      } catch (error) {
        console.log(error)
      }
      
    }
  
    
  return (

    <>
    <form onSubmit={CreateShippingAddress} className='form-container'>
    <h3>Please Add Shipping Information</h3>
    <label>
      Full Name:
      <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} />
    </label>
    <label>
      Address 1:
      <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
    </label>
    <label>
      Address 2:
      <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
    </label>
    <label>
      Country:
      <input type="text" name="country" value={formData.country} onChange={handleChange} />
    </label>
    <label>
      City:
      <input type="text" name="city" value={formData.city} onChange={handleChange} />
    </label>
    <label>
      Postcode: 
      <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} />
    </label>
    <button type="submit">Submit</button>
  </form>

  
  </>
    
  )
}


