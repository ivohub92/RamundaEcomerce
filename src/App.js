import React from 'react';
import './App.css';
import CartContext from './components/context/CartContext';
import Router from '../src/router/Router'



function App() {
  return(
    <div className="App">
      <CartContext.Provider>
        <Router/>
      </CartContext.Provider>      
    </div>
  ); 
}

export default App
