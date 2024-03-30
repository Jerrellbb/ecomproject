import { useLoaderData, useActionData, Link } from "react-router-dom"

export default function OrderList(){
  const orders = useLoaderData()
  const res = useActionData()
  


  return(

    <>
    <div className="orders-container">
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <Link
            xs={12}
            md={4}
            lg={3}
            to={`/order/${order.id}`}>
          <h3>Order ID: {order.id}</h3>
          <p>Total Price: £{order.total_price}</p>
          <p>Order Fulfilled: {order.order_fulfilled ? "Yes" : "No"}</p>

          <div className="shipping-address">
            <h4>Shipping Address:</h4>
            <ul>
              <li><strong>Full Name:</strong> {order.shipping_address.full_name}</li>
              <li><strong>Address 1:</strong> {order.shipping_address.address1}</li>
              <li><strong>Address 2:</strong> {order.shipping_address.address2}</li>
              <li><strong>Country:</strong> {order.shipping_address.country}</li>
              <li><strong>City:</strong> {order.shipping_address.city}</li>
              <li><strong>Postcode:</strong> {order.shipping_address.postcode}</li>
            </ul>
          </div>

          <div className="trainers-list">
            <h4>Trainers:</h4>
            <ul>
              {order.trainers.map((trainer) => (
                <li key={trainer.id}>
                  <strong>Name:</strong> {trainer.name}, <strong>Price:</strong> £{trainer.price}
                </li>
              ))}
            </ul>
          </div>
          </Link>
        </div>
      ))}

    </div>
  
    </>
  )
}