import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Homepage from './pages/Homepage'
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Footer from './components/Footer'
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/productListing' component={ProductListing} />
          <Route path='/ProductDetails' component={ProductDetails} />
          <Route path='/Cart' component={Cart} />
          <Route path='/OrderConfirmation' component={OrderConfirmation} />
        </Switch>
        
        <Footer/>
        </Router>
       
        
    </div>
  );
}

export default App;
