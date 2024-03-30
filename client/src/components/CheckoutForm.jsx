

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'
import { cartId } from '../../utils/helpers/common'
import {  toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { deleteAndCreateCart } from '../../utils/actions/cart'

const CheckoutForm = ({shippingAddressId, trainersInCart}) => {
  
  const stripe = useStripe()
  const elements = useElements()
  const Basket = cartId()
  
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
    const { data } = await axios.post('/api/payment/create-payment-intent/', {
      basketId: Basket,
      trainers: trainersInCart,
      shipping_address: shippingAddressId

    })
    let clientSecret = data.client_secret


    if (elements) {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        
        }
      })

      if (result.error) {
        console.error('Payment failed:', result.error)
      } else {
        console.log('Payment succeeded:', result.paymentIntent)
        
        toast.success('Your order has been placed!')
        navigate('/')
        deleteAndCreateCart()
        
      }
    }
  } catch (error) {
    console.error('Error creating PaymentIntent:', error)
  }
}


return (
  <form onSubmit={handleSubmit}>
    <CardElement />
    <button className="cart-btn"type="submit" disabled={!stripe}>
      Confirm
    </button>
  </form>
)
}

export default CheckoutForm
