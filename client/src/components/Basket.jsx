import { useLoaderData, useNavigate } from "react-router-dom"
import { useEffect, useState, useCallback } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ToastContainer, toast } from 'react-toastify'
import { getUserId, getToken } from '../../utils/helpers/common.js'
import axios from "axios"
import CheckoutForm from './CheckoutForm.jsx'

export default function Basket() {
  const cart = useLoaderData()
  const stripePromise = loadStripe('pk_test_51Ox73PAEr8yRclaw8vqOjlTHYuBzmYSt0QsT1XFpSi5y776T71sgXAUa7gmldfXS0mQslLx50Teppdq1VlJt9A5e003EskoOfb');

  const { trainer } = cart
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [shippingAddress, setShippingAddress] = useState([])
  const [removeItemId, setRemoveItemId] = useState(null)
  const [trainersInCart, setTrainersInCart] = useState([])
  console.log('trainers in cart', trainersInCart)
  function handleClose() {

    setShow(false)
  }

  const handleShow = () => setShow(true);

  const price = trainer.map(item => item.price)
  function totalPrice(total, price) {
    return total + price
  }




  const getProfile = useCallback(async () => {
    try {
      const userId = await getUserId()
      console.log(userId)
      const res = await axios.get(`/api/auth/${userId}/`)
      const { shipping_address } = res.data
      setShippingAddress(shipping_address)
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    //set trainersincart to useladerdata
    if (trainer) {
      setTrainersInCart(trainer)
    }
    getProfile()
  }, [getProfile, trainer])




  async function removeItemFromCart(e, itemId) {
    e.preventDefault()
    setRemoveItemId(itemId)
    console.log(e.target.id)
    try {




      const cartData = await JSON.parse(localStorage.getItem('cart'))
      const res = await axios.patch(`/api/basket/${cartData.id}/`, {
        action: 'delete',
        trainer: [itemId]
      }, {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }
      })
      if (res.status === 200) {
        setTrainersInCart(prevTrainer => prevTrainer.filter(item => item.id !== itemId))
        toast.success('Item removed from cart')
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to remove item from cart')
    }
  }
  
  return (
    <>
      {trainer.length > 0 ? (<div className="cart-container">
        <ul className="cart-list">
          {trainersInCart.map(t => (
            <li key={t.id} className="cart-item">
              <img src={t.image_1} alt={t.name} className="cart-image" />
              <div className="cart-details">
                <p className="cart-name">{t.name}</p>
                <p className="cart-price">£{t.price}</p>
              </div>
              <form method="PATCH" onSubmit={(e) => removeItemFromCart(e, t.id)} >
                <input type="hidden" name="trainer" value={t.id} />
                <button type="submit" className="cart-remove" >Remove</button>

              </form>

            </li>
          ))}
          <li className="cart-total">
            <p>Number of Items: {trainer.length}</p>
            <p>Total: £{price.reduce(totalPrice, 0).toFixed(2)}</p>
          </li>
        </ul>
      </div>) : (<h1>Your cart is empty. Head to the shop to fill it up!</h1>)}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="shipping-info">{shippingAddress.map(info =>
            <>
            <div key={info.id}>
              <p>{info.full_name}</p>
              <p>{info.address1}</p>
              <p>{info.country}</p>
              <p>{info.city}</p>
              <p>{info.postcode}</p>
              </div>
              
            </>)}</div>

          <div className="card-info" style={{ width: '70%' }}>  <Elements stripe={stripePromise} >
            <CheckoutForm shippingAddress={shippingAddress} trainersInCart={trainersInCart}  />
          </Elements></div>


        </Modal.Body>

        <Modal.Footer>
          <button className="cart-btn" onClick={handleClose}>
            Close
          </button>

        </Modal.Footer>
      </Modal>

      {trainer.length > 0 && (<div id="pay-now" >
        <button className="cart-btn"  onClick={() => shippingAddress.length === 0 ? navigate('/shippinginformation/') : handleShow()}>pay now</button>
      </div>)}
      <ToastContainer />
    </>

  )
}
