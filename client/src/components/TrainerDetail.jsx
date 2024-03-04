import { useLoaderData } from "react-router-dom"

export default function TrainerDetail() {
  const trainer = useLoaderData()
  const {  name, brand, images, material, description, price, in_stock, size } = trainer


  return (

    <>
      <h1>{name}</h1>
      <div className="tainer-info">
        <img src={images[0]} alt={name} />
        
        <p>{brand.name}</p>
        <p>{material}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{size}</p>
        <p>{in_stock}</p>
      </div>

    </>
  )
}