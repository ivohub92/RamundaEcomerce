import React from 'react';
import './App.css';
import ItemListContainer from './components/navBar/ItemListContainer';
import { NavBar } from './components/navBar/navBar';
import ItemCount  from './components/contador/ItemCount';

const datos = {
  titulo : "Texto generico. Lorem ipsum y lo que sea"
}

const cantidad={
  stock: 20
}

const inicial={
  inicial: 0
}

function App() {
  return(
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo={datos.titulo}/>
      <ItemCount stock={cantidad.stock} inicial={inicial.inicial}/>      
    </div>
  ); 
}

export default App
