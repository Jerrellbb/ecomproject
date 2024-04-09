// import {Form} from "react-router-dom"
import ImageUploadField from "./ImageUpload"
import { useState, useEffect, } from "react"
import { Form, useNavigate, useActionData } from "react-router-dom"

export default function CreateTrainer() {
  const res = useActionData()

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    image_1: "",
    image_2: "",
    image_3: "",
    material: "",
    description: "",
    price: "",
    size: "",
    condition: "",
    gender: ""
  })

  useEffect(() => {
    console.log(res)
    if (res?.status === 201) {
      navigate(`/trainer/${res.data.id}/`)
    }
  }, [res, navigate])

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
      <div className="form-container">
        <h1 className="text-center bold display-3 mb-4">Post your trainer</h1>
        <Form className='form' method="POST"  >
          <div className="form-group">
            <label htmlFor="name">Name of Trainer</label>
            <input type="text" id="name" name="name" placeholder='Name of Trainer' onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="colour">Colour of Trainer</label>
            <input type="text" id="colour" name="colour" placeholder='Colour of Trainer' onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="material">Material</label>
            <input type="text" id="material" name="material" placeholder='Material' onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="description">About the Trainer</label>
            <input type="text" id="description" name="description" placeholder='About the Trainer' onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" placeholder='e.g. 10.99' step="0.01" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="size">Size</label>
            <input type="number" id="size" name="size" placeholder='e.g. 7' onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="brand">Brand</label><br/>
            <select id="brand" name="brand" onChange={handleChange}>
              <option value="default" defaultValue>Choose brand</option>
              <option value="1">Reebok</option>
              <option value="2">Fila</option>
              <option value="3">Puma</option>
              <option value="4">Adidas</option>
              <option value="5">Nike</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label><br/>
            <select id="gender" name="gender" onChange={handleChange}>
              <option value="default" defaultValue>Choose gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          <div className="form-group">
            <label hidden htmlFor="images">Images</label>
            <ImageUploadField formData={formData} setFormData={setFormData} />
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
    </>
  )
}