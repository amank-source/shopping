import React from 'react'

export const initialState = {
  basket: [],
  user: null,
}
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user }

    case 'Add_to_Basket':
      // logic for adding to basket
      return { ...state, basket: [...state.basket, action.item] }

    case 'Remove_From_Basket':
      //Logic for removing item from basket
      let newBasket = [...state.basket]
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      )

      if (index >= 0) {
        // remove item
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in basket`,
        )
      }
      return {
        ...state,

        basket: newBasket,
      }

    default:
      return state
  }
}
export default reducer
