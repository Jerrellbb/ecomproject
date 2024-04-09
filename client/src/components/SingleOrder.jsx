import { useLoaderData, useActionData, Form } from "react-router-dom"


export default function SingleOrder() {
  const order = useLoaderData()
  const { id,  shipping_address, total_price, created_at, order_fulfilled } = order
  console.log(order.trainers)


  return (
    <>
      <div className="single-order">
        <h2>Order #{id}</h2>
        <p>Created at: {new Date(created_at).toLocaleString()}</p>
        <p>Total Price: £{total_price}</p>
        <p>Order Fulfilled: {order_fulfilled ? 'Yes' : 'No'}</p>
        <h3>Shipping Address</h3>
        <div className="shipping-address">
          <p><strong>Full Name:</strong> {shipping_address.full_name}</p>
          <p><strong>Address 1:</strong> {shipping_address.address1}</p>
          <p><strong>Address 2:</strong> {shipping_address.address2}</p>
          <p><strong>City:</strong> {shipping_address.city}, <strong>Country:</strong>{shipping_address.country}</p>
          <p><strong>Postcode:</strong> {shipping_address.postcode}</p>
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
          {!order.order_fulfilled ?

            (<><input type="hidden" name="order_fulfilled" value={true} /><button type="submit">Mark as fullfilled: ✅</button></>)
            :
            (<><input type="hidden" name="order_fulfilled" value={false} /><button type="submit">Mark as unfulfilled: ❌</button></>)

          }

        </Form>

      </div>

    </>
  )
}