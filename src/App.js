import React from 'react';
import './App.css';
import {CartProvider} from './components/context/CartContext';
import Router from '../src/router/Router'



function App() {
  return(
    <div className="App">
      <CartProvider>
        <Router/>
      </CartProvider>      
    </div>
  ); 
}

export default App
