import { useLoaderData, useNavigate } from "react-router-dom"

import axios from "axios"
import { getToken } from "../../utils/helpers/common"

export default function TrainerDetail() {
  const trainer = useLoaderData()
  const navigate = useNavigate()

  const { id, name, brand, image, material, description, price, in_stock, size } = trainer

  const handleSubmit = async (event) => {
    event.preventDefault()

    await addToCart([trainer])


  }

  async function addToCart() {


    try {


      const cartData = JSON.parse(localStorage.getItem('cart'))
      const res = await axios.patch(`/api/basket/${cartData.id}/`, {
        validateStatus: () => true,
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
      
        <h1>{brand.name}<br/>{name}</h1>
        <div className="trainer-info">
          <img src={image} alt={name} style={{ height: 200, width:200 }} />

          
          <p><strong>price:</strong> £{price}</p>
          <p><strong>size:</strong>{size}</p>
          <p>{in_stock}</p>
          <p>{material}</p>
          <p><strong>description:</strong> {description}</p>

          <form className='form' onSubmit={handleSubmit}>
            <input type="hidden" id="trainerId" name="trainer" value={id} />
            <button type="submit">Add to cart</button>

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