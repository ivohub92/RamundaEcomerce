import React from 'react';
import './App.css';
import ItemListContainer from './components/navBar/ItemListContainer';
import { NavBar } from './components/navBar/navBar';


const datos = {
  titulo : "Texto generico. Lorem ipsum y lo que sea"
}

function App() {
  return(
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo={datos.titulo}/>      
    </div>
  ); 
}

export default App
