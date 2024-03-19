// import {Form} from "react-router-dom"
import ImageUploadField from "./ImageUpload"
import { useState, useEffect, } from "react"
import { Form, useNavigate, useActionData} from "react-router-dom"

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
    condition: ""
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
          <input type="text" name="name" placeholder='name of trainer' onChange={handleChange} />

          <input type="text" name="colour" placeholder='colour of trainer' onChange={handleChange} />

          <input type="text" name="material" placeholder='material' onChange={handleChange} />

          <input type="text" name="description" placeholder='About the trainer' onChange={handleChange} />

          <input type="number" name="price" placeholder='e.g. 10.99' step='0.01' onChange={handleChange} />

          <input type="number" name="size" placeholder='e.g. 7' onChange={handleChange} />

          <label htmlFor="brand">Brand: &nbsp; </label >
          <select name="brand" id="brand" onChange={handleChange}>
            <option value="default" defaultValue>choose brand</option>
            <option value="1">Reebok</option>
            <option value="2">Fila</option>
            <option value="3">Puma</option>
            <option value="4">Adidas</option>
            <option value="5">Nike</option>
          </select >
          <br/>
          <br/>
          <label htmlFor="condition">Condition:&nbsp;</label >
          <select name="condition" id="condition" onChange={handleChange}>
            <option value="default" defaultValue>Trainer Condition</option>
            <option value="New with tags">New with tags</option>
            <option value="New without tags">New without tags</option>
            <option value="Good">Good</option>
            <option value="Satisfactory">Satisfactory</option>
            
          </select >

          <label hidden htmlFor="images">Images</label>
        <ImageUploadField  formData={formData} setFormData={setFormData}  />

          
            <button type="submit">Submit</button>
        </Form>
      </div>
    </>
  )
}