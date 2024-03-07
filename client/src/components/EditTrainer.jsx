
import ImageUploadField from "./ImageUpload"
import { useState, useEffect } from "react"
import { Form, useActionData, useLoaderData, useNavigate } from "react-router-dom"


export default function EditTrainer() {

  const res = useActionData()
  const trainer = useLoaderData()
  const navigate = useNavigate()
  const { id, name, description, image, price, material, brand, size, colour } = trainer
  console.log(id)


  useEffect(() => {
    console.log(res)
    if (res?.status === 200) {
      navigate(`/auth/trainer/${res.id}/`)
    }
  }, [res, navigate])


  const [formData, setFormData] = useState({
    name: name,
    brand: brand.id,
    image: image,
    material: material,
    description: description,
    price: price,
    size: size,
    colour: colour,


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

          <input type="number" name="price" placeholder='e.g. 10.99' onChange={handleChange} value={formData.price} />

          <input type="number" name="size" placeholder='e.g. 7' onChange={handleChange} value={formData.size} />

          <label htmlFor="brand">Brand</label >
          <select name="brand" id="brand" onChange={handleChange} value={formData.brand}>
            <option value="default" defaultValue>choose brand</option>
            <option value="1">Reebok</option>
            <option value="2">Fila</option>
            <option value="3">Puma</option>
            <option value="4">Adidas</option>
            <option value="5">Nike</option>
          </select >

          <label hidden htmlFor="images">Images</label>
          <ImageUploadField formData={formData} setFormData={setFormData} />
          <button type="button" className="btn btn-primary" onClick={() => handleImageChange(null)}>
            Choose New Image
          </button>


          <button type="submit">Submit</button>
          {res && <p className='danger'>{res.data.message}</p>}
        </Form>
      </div>
    </>
  )
}