import { useEffect, useState } from "react"
import { useLoaderData, useActionData, Link } from "react-router-dom"

export default function OrderList() {
  const orders = useLoaderData()
  const res = useActionData()
  const [filteredOrders, setFilteredOrders] = useState([])
  const [fulfillment, setFulfillment] = useState('All')

  useEffect(() => {
    if (fulfillment === 'All') {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter(order => order.order_fulfilled.toString() === fulfillment);
      setFilteredOrders(filtered);
    }
  }, [orders, fulfillment]);

  return (

    <>
      <div className="search-bar">

        <select className="m-4" name="order_fulfilled" value={orders.order_fulfilled} onChange={(e) => setFulfillment(e.target.value)}>
          <option value="All">All</option>
          <option value="true">Fullfilled</option>
          <option value="false">Unfullfilled</option>



        </select>
      </div>

      <div className="orders-container">
        {filteredOrders.map((order) => (
          <div key={order.id} className="order-card">
            <Link
              xs={12}
              md={4}
              lg={3}
              to={`/order/${order.id}`}>
              <h3>Order ID: {order.id}</h3>
              <p>Total Price: £{order.total_price}</p>
              <p>Order Fulfilled: {order.order_fulfilled ? "Yes" : "No"}</p>


              <div className="trainers-list">
                <h4>{order.trainers.length} trainer(s) in this order</h4>
              </div>

            </Link>
          </div>
        ))}

      </div>

    </>
  )
}