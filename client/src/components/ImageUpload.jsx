// /* eslint-disable react/prop-types */
// import axios from 'axios'

// export default function ImageUploadField({ formData, setFormData }) {

//   async function handleImageUpload(e) {
//     const file = e.target.files[0]
//     const preset = import.meta.env.VITE_UPLOAD_PRESET
//     const endpoint = import.meta.env.VITE_UPLOAD_URL

//     // Create a new form to send to Cloudinary
//     const data = new FormData()
//     data.append('file', file)
//     data.append('upload_preset', preset)

//     // Send the form data to the API endpoint
//     const { data: { secure_url } } = await axios.post(endpoint, data)

//     const newObj = {
//       ...formData,
//       image: secure_url,
//       image_2: secure_url,
//       image_3: secure_url
//     }
//     console.log(newObj)

//     // send form data to image url
//     setFormData(newObj)
//   }

//   return (
//     <>
//       {formData.image ?
//         <>
//           <img src={formData.image} alt="Image" style={{ maxWidth: "100px" }} />
//           <input type="hidden" value={formData.image} name='image' />
//         </>
//         :
//         <>
//           <input type='file' name='image' onChange={handleImageUpload} />
//         </>
//       }
//     </>
//   )
// }

/* eslint-disable react/prop-types */

import axios from 'axios';

export default function ImageUploadField({ formData, setFormData }) {

  async function handleImageUpload(e) {
    const files = e.target.files;
    const preset = import.meta.env.VITE_UPLOAD_PRESET;
    const endpoint = import.meta.env.VITE_UPLOAD_URL;

    // Create an array to store secure URLs
    const secureUrls = []

    // Iterate through each file and upload it to Cloudinary
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Create a new form to send to Cloudinary
      const data = new FormData()
      data.append('file', file)
      data.append('upload_preset', preset)

      // Send the form data to the API endpoint
      const { data: { secure_url } } = await axios.post(endpoint, data)
      secureUrls.push(secure_url)
    }

    // Update formData with secure URLs
    const newObj = {
      ...formData,
      images: secureUrls //  store the URLs in an array called 'images'
    }

    // send form data to image url
    setFormData(newObj)
  }

  return (
    <>
      {formData.images && formData.images.length > 0 ? (
        formData.images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} style={{ maxWidth: "100px" }} />
            <input type="hidden" value={imageUrl} name={`image_${index + 1}`} />
          </div>
        ))
      ) : (
        <input type="file" name="images" onChange={handleImageUpload} multiple />
      )}
    </>
  )
}
