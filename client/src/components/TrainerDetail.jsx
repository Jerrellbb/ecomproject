import { useLoaderData, useNavigate, useActionData, Form } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { getToken } from "../../utils/helpers/common"

export default function TrainerDetail() {
  // const res = useActionData()
  const trainer = useLoaderData()
  const navigate = useNavigate()

  const { id, name, brand, image, material, description, price, in_stock, size } = trainer

  const [formData, setFormData] = useState({
    trainer: [`${id}`],
   
    
    
  })
  console.log(formData)
  function handleSubmit(e) {
    const { name, value } = e.target;
    if (name === 'trainer') {
      setFormData({...formData, id: [value] }); // Set id directly to an array containing the value
    }
  }

  async function addTocart(e) {
    e.preventDefault()
    
    try {
      
  
     
  
      const cartData = await JSON.parse(localStorage.getItem('cart'))
      const res = await axios.patch(`/api/basket/${cartData.id}/`, formData, {
        validateStatus : () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }
      })
      console.log(res)
      // navigate(`/projects/${res.data.id}/`)
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (

    <>
      
        <h1>{brand.name}<br/>{name}</h1>
        <div className="trainer-info">
          <img src={image} alt={name} style={{ height: 200, width: 200 }} />

          
          <p><strong>price:</strong> £{price}</p>
          <p><strong>size:</strong>{size}</p>
          <p>{in_stock}</p>
          <p>{material}</p>
          <p><strong>description:</strong> {description}</p>

          <form className='form' method="PATCH" onSubmit={addTocart} >
            <input type="hidden"  name="trainer" value={id} />
            <button type="submit" >Add to cart</button>

          </form>
          <button
                type="button"
                
                onClick={() => navigate(`/trainer/${id}/edit/`)}
              >
                Edit trainer
              </button>
        </div>
      
    </>
  )
}