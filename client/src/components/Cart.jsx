import { useLoaderData } from "react-router-dom"


export default function Cart() {
  const cart = useLoaderData()

  const { trainer } = cart
  const price = trainer.map(item => item.price)
  function totalPrice(total, price) {
    return total + price
  }

  return (
    <div className="cart-container">
      <ul className="cart-list">
        {trainer.map(t => (
          <li key={t.id} className="cart-item">
            <img src={t.image} alt={t.name} className="cart-image" />
            <div className="cart-details">
              <p className="cart-name">{t.name}</p>
              <p className="cart-price">£{t.price}</p>
            </div>
            <button className="cart-remove">Remove</button>
          </li>
        ))}
        <li className="cart-total">
          <p>Number of Items: {trainer.length}</p>
          <p>Total: £{price.reduce(totalPrice, 0)}</p>
        </li>
      </ul>
    </div>
  )
}
