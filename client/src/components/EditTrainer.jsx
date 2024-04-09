
import ImageUploadField from "./ImageUpload"
import { useState, useEffect } from "react"
import { Form, useActionData, useLoaderData, useNavigate } from "react-router-dom"


export default function EditTrainer() {

  const res = useActionData()
  const trainer = useLoaderData()
  const navigate = useNavigate()
  const { name, description, image_1, price, material, brand, size, colour, image_2, image_3, gender } = trainer



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

    gender: gender,


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
          <div className="form-group">
            <label htmlFor="name">Name of Trainer</label>
            <input type="text" id="name" name="name" placeholder='Name of Trainer' onChange={handleChange} value={formData.name} />
          </div>

          <div className="form-group">
            <label htmlFor="colour">Colour of Trainer</label>
            <input type="text" id="colour" name="colour" placeholder='Colour of Trainer' onChange={handleChange} value={formData.colour} />
          </div>

          <div className="form-group">
            <label htmlFor="material">Material</label>
            <input type="text" id="material" name="material" placeholder='Material' onChange={handleChange} value={formData.material} />
          </div>

          <div className="form-group">
            <label htmlFor="description">About the Trainer</label>
            <input type="text" id="description" name="description" placeholder='About the Trainer' onChange={handleChange} value={formData.description} />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" placeholder='e.g. 10.99' step="0.01" onChange={handleChange} value={formData.price} />
          </div>

          <div className="form-group">
            <label htmlFor="size">Size</label>
            <input type="number" id="size" name="size" placeholder='e.g. 7' onChange={handleChange} value={formData.size} />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label><br />
            <select id="gender" name="gender" onChange={handleChange}>
              <option value="default" defaultValue>Choose gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="brand">Brand</label><br />
            <select id="brand" name="brand" onChange={handleChange} value={formData.brand}>
              <option value="default" defaultValue>Choose brand</option>
              <option value="1">Nike</option>
              <option value="2">Adidas</option>
              <option value="3">Puma</option>
              <option value="4">Fila</option>
              <option value="5">Reebok</option>
            </select>
          </div>

          <div className="form-group">
            <label hidden htmlFor="images">Images</label>
            <ImageUploadField formData={formData} setFormData={setFormData} />
          </div>

          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={() => handleImageChange(null)}>
              Choose New Image
            </button>
          </div>

          <div className="form-group">
            <button type="submit">Edit</button>
            {res && <p className='danger'>{res.data.message}</p>}
          </div>
        </Form>
      </div>



    </>
  )
}