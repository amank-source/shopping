import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()
  const removeFromBasket = () => {
      dispatch({
          type: 'Remove_From_Basket',
          id: id
      })

  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutproduct_img" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐️</p>
            })}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
