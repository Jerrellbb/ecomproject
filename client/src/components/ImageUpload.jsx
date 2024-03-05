/* eslint-disable react/prop-types */
import axios from 'axios'

export default function ImageUploadField({ formData, setFormData }) {

  async function handleImageUpload(e) {
    const file = e.target.files[0]
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    // Create a new form to send to Cloudinary
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    // Send the form data to the API endpoint
    const { data: { secure_url } } = await axios.post(endpoint, data)

    const newObj = {
      ...formData,
      image: secure_url
    }
    console.log(newObj)

    // send form data to image url
    setFormData(newObj)
  }

  return (
    <>
      {formData.image ?
        <>
          <img src={formData.image} alt="Image" style={{ maxWidth: "100px" }} />
          <input type="hidden" value={formData.image} name='image' />
        </>
        :
        <>
          <input type='file' name='image' onChange={handleImageUpload} />
        </>
      }
    </>
  )
}