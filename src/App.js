import React from 'react';

import Homepage from './pages/Homepage'
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

import './App.css';

function App() {
  return (
    <div className="App">
      
        
          TAGA FASHION
          <Homepage/>
          <ProductListing/>
          <ProductDetails/>
          <Cart/>
          <Checkout/>
          <OrderConfirmation/>
        
      
    </div>
  );
}

export default App;
