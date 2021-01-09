import React, { Fragment, useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'

function Payment() {
  const history = useHistory()
  const stripe = useStripe()
  const elements = useElements()
  const [{ basket, user }, dispatch] = useStateValue()

  const [error, setError] = useState(null)
  const [processing, setprocessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [clientSectere, setClienetSecrete] = useState(true)

  useEffect(() => {
    //genereate special stripe sectrete
    const getClientSecrete = async () => {
      const response = await axios({
        method: 'POST',
        //stripe expect total in a currency subunit
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClienetSecrete(response.data.clientSectere)
    }
    getClientSecrete()
  }, [basket])

  console.log('client secret is >>>>>>', clientSectere)

  const handleSubmit = async (e) => {
    //all the fancy suff here
    e.preventDefault()
    setprocessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSectere, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confrmation
        setSucceeded(true)
        setError(null)
        setprocessing(false)
        

        history.replace('/orders')
      })
  }
  const handleChnage = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          CheckOut (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="paymentsection">
          <div className="payment-title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment-adress">
            <p> 123 React lane</p>
            <p>Los Angles california</p>
          </div>
        </div>

        <div className="paymentsection">
          <div className="payment-title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment-items">
            {basket?.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              )
            })}
          </div>
        </div>

        <div className="paymentsection">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-detail">
            {/* strpe magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChnage={handleChnage} />
              <div className="payment-price-container">
                <CurrencyFormat
                  renderText={(value) => (
                    <Fragment>
                      <h3>Order Total: {value}</h3>
                    </Fragment>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
