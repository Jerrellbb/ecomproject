import { useLoaderData, useActionData, Form } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { getToken } from "../../utils/helpers/common"

export default function TrainerDetail() {
  const trainer = useLoaderData()
  // const res = useActionData()
  const {  id, name, brand, image, material, description, price, in_stock, size } = trainer

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    await addToCart([trainer])

    
  }

  async function addToCart(){
    
      
      try {
        
    // console.log(project)
    const cartData = JSON.parse(localStorage.getItem('cart'))
        const res = await axios.patch(`/api/basket/${cartData.id}/`,  {
          validateStatus : () => true,
          headers: {
            Authorization: `Bearer ${getToken()}`,
          }
        })
        console.log(res)
        
      } catch (error) {
        console.log(error)
      }
      
    }
  return (

    <>
      <h1>{name}</h1>
      <div className="tainer-info">
        <img src={image} alt={name} />
        
        <p>{brand.name}</p>
        <p>{material}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{size}</p>
        <p>{in_stock}</p>
        <form className='form' onSubmit={handleSubmit}>
        <input type="hidden" id="trainerId" name="trainer" value={id}   />
          <button type="submit">Add to cart</button>
          {/* {res && <p className='danger'>{res.data.message}</p>} */}
        </form>
      </div>

    </>
  )
}