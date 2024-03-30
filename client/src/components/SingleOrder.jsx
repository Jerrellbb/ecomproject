import { useLoaderData, useActionData, Form } from "react-router-dom"


export default function SingleOrder(){
  const order = useLoaderData()
  const { id, trainers, shipping_address, total_price, created_at, order_fulfilled } = order
  console.log(order.trainers)
  

  return(
    <>
    <div className="single-order">
      <h2>Order #{id}</h2>
      <p>Created at: {new Date(created_at).toLocaleString()}</p>
      <p>Total Price: £{total_price}</p>
      <p>Order Fulfilled: {order_fulfilled ? 'Yes' : 'No'}</p>
      <h3>Shipping Address</h3>
      <div className="shipping-address">
        <p>{shipping_address.full_name}</p>
        <p>{shipping_address.address1}</p>
        <p>{shipping_address.address2}</p>
        <p>{shipping_address.city}, {shipping_address.country}</p>
        <p>{shipping_address.postcode}</p>
      </div>
      <h3>Trainers</h3>
      <div className="trainers">
   
        {order.trainers.map((trainer) => (
                <li key={trainer.id}>
                  <strong>Name:</strong> {trainer.name}, <strong>Price:</strong> £{trainer.price}
                </li>
              ))}
      </div>
      <Form method="PATCH"  >
        <input type="hidden" name="order_fulfilled" value={true}  />
        <button type="submit"  >Mark as fullfilled: ✅</button>

      </Form>
      
    </div>
  
    </>
  )
}