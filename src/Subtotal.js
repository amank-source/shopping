import React, { Fragment } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
  const history = useHistory()

  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={(e) => history.push('/payment')}>
        Proceed to checkout
      </button>
    </div>
  )
}

export default Subtotal
