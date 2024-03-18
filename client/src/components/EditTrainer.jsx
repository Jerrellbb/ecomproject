
import ImageUploadField from "./ImageUpload"
import { useState, useEffect } from "react"
import { Form, useActionData, useLoaderData, useNavigate } from "react-router-dom"


export default function EditTrainer() {

  const res = useActionData()
  const trainer = useLoaderData()
  const navigate = useNavigate()
  const { id, name, description, image_1, price, material, brand, size, colour, condition,image_2, image_3 } = trainer



  useEffect(() => {
    console.log(res)
    if (res?.status === 200) {
      navigate(`/trainer/${res.data.id}/`)
    }
  }, [res, navigate])


  const [formData, setFormData] = useState({
    name: name,
    brand: brand.id,
    image_1: image_1,
    image_2: image_2,
    image_3: image_3,
    material: material,
    description: description,
    price: price,
    size: size,
    colour: colour,
    condition: condition


  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleImageChange = (newImage) => {
    setFormData({ ...formData, image: newImage })

  }
 
  return (
    <>
      <div className="form-container">
        <h1 className="text-center bold display-3 mb-4">Edit your trainer</h1>
        <Form className='form' method="POST"  >
          <input type="text" name="name" placeholder='name of trainer' onChange={handleChange} value={formData.name} />

          <input type="text" name="colour" placeholder='colour of trainer' onChange={handleChange} value={formData.colour} />

          <input type="text" name="material" placeholder='material' onChange={handleChange} value={formData.material} />

          <input type="text" name="description" placeholder='About the trainer' onChange={handleChange} value={formData.description} />

          <input type="number" name="price" placeholder='e.g. 10.99' step="0.01" onChange={handleChange} value={formData.price} />

          <input type="number" name="size" placeholder='e.g. 7' onChange={handleChange} value={formData.size} />

          <label htmlFor="brand">Brand</label >
          <select name="brand" id="brand" onChange={handleChange} value={formData.brand}>
            <option value="default" defaultValue>choose brand</option>
            <option value="1">Nike</option>
            <option value="2">Adidas</option>
            <option value="3">Puma</option>
            <option value="4">Fila</option>
            <option value="5">Reebok</option>
          </select >
          <br/>
          <br/>
          <label htmlFor="condition">Condition</label >
          <select name="condition" id="condition" onChange={handleChange}>
            <option value="default" defaultValue>choose one</option>
            <option value="New with tags">New with tags</option>
            <option value="New without tags">New without tags</option>
            <option value="Good">Good</option>
            <option value="Satisfactory">Satisfactory</option>
            
          </select >

          <label hidden htmlFor="images">Images</label>
          <ImageUploadField formData={formData} setFormData={setFormData} />
          <button type="button" className="btn btn-primary" onClick={() => handleImageChange(null)}>
            Choose New Image
          </button>

          


          <button type="submit">Edit</button>
          {res && <p className='danger'>{res.data.message}</p>}
        </Form>
      </div>
    </>
  )
}