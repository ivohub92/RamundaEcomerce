import React from 'react';
import './App.css';
import { NavBar } from './components/navBar/navBar';
import CartContext from '../src/context/CartContext';




function App() {
  return(
    <div className="App">
      <CartContext.Provider>
      <NavBar/>
      </CartContext.Provider>      
    </div>
  ); 
}

export default App
