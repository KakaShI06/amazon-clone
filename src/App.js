import React, { useEffect } from 'react'
import Header from './Component/Header/Header.js';
import Home from './Component/Home/Home.js';
import Checkout from './Component/Checkout/Checkout.js';
import Login from './Component/Login/Login.js';
import Payment from './Component/Payment/Payment.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider.js';
import { auth } from './firebase.js';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user : null
        })
      }
      
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path='/login'>
            <Login /> 
          </Route>

          <Route path='/checkout'>
            <Header />           
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />           
            <Payment />
          </Route>


          <Route path='/'>
            <Header />
            <Home />
          </Route>

          

        </Switch>
      </div>
    </Router>
  )
}

export default App;
