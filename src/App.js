import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

        //user is loggedin
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
        //user is logged out
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])
  console.log('user is', user)

  return (
    <Router>
      <Switch>
        <Route exact path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
