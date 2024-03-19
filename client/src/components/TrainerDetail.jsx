import { useLoaderData, useNavigate, Form } from "react-router-dom"

import axios from 'axios'
import { getToken, getUserId } from "../../utils/helpers/common"


export default function TrainerDetail() {

  const trainer = useLoaderData()
  const navigate = useNavigate()

  const { id, name, brand, image_1, image_2, image_3,  material, description, price, in_stock, size, owner } = trainer
  let brandName = brand.name.charAt(0).toUpperCase() + brand.name.slice(1)
  const formData = {
    action: 'add',
    trainer: [`${id}`]}

  console.log(in_stock)

  async function addTocart(e) {
    e.preventDefault()

    try {


      const cartData = await JSON.parse(localStorage.getItem('cart'))
      const res = await axios.patch(`/api/basket/${cartData.id}/`, formData, {
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

      <h1>{brandName}  {name}</h1>
      <div className="trainer-card">
        <div className='trainer-image'>
          <img src={image_1} alt={name} style={{ height: 200, width: 200 }} />
          {image_2 && <img src={image_2} alt={name} style={{ height: 200, width: 200 }} />}
          {image_3 && <img src={image_3} alt={name} style={{ height: 200, width: 200 }} />}
        </div>
        <div className="trainer-info">
          <p><strong>Price:</strong> £{price}</p>
          <p><strong>Size: </strong>{size}</p>
          
          <p><strong>Material: </strong>{material}</p>
          {description ? (
      <p><strong>Description:</strong> {description}</p>
    ) : (
      <p><strong>Description:</strong>Lorem ipsum dolor sit amet</p>
    )}
        </div>
      </div >

      <div className="detail-btns">
        <form  method="PATCH" onSubmit={addTocart} >
          <input type="hidden" name="trainer" value={id} />
          <button type="submit" onClick={() => navigate(`/trainers/`)} >Add to cart</button>

        </form>
        {getUserId() === owner.id && <><button
          type="button"

          onClick={() => navigate(`/trainer/${id}/edit/`)}
        >
          Edit trainer
        </button>
        
        <Form method='POST'>
          <button >Delete Trainer</button>
        </Form></>}
      </div>
    </>
  )
}