import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
  const [{ user, basket }, dispatch] = useStateValue()
  const login = () => {
    if (user) {
      auth.signOut()
    }
  }

  console.log(basket)
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="azamon logo"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="headerNav">
        <Link to={!user && '/login'} className="header-link">
          <div onClick={login} className="headerOption">
            <span className="headerOpt-line1">Hello {user?.email}</span>
            <span className="headerOpt-line2">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/" className="header-link">
          <div className="headerOption">
            <span className="headerOpt-line1">Returns</span>
            <span className="headerOpt-line2">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header-link">
          <div className="headerOption">
            <span className="headerOpt-line1">Your</span>
            <span className="headerOpt-line2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-link">
          <div className="headerOpt-basket">
            <ShoppingBasketIcon />
            <span className="headerOpt-line2 header_baketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
