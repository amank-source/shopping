import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'

import { auth } from './firebase'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (event) => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  const register = (event) => {
    event.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create user and login
      })
      .catch((e) => alert(e.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />

          <button onClick={login} type="submit" className="login-siginbutton">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies and our interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login-createbutton">
          Create your amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
