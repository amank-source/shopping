import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()
  const addToBasket = () => {
    dispatch({
      type: 'Add_to_Basket',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐️</p>
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
