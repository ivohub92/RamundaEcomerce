import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/navBar';
import ItemList  from './components/ItemListContainer/ItemList';

const datos = {
  titulo : "Texto generico. Lorem ipsum y lo que sea"
}



function App() {
  return(
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo={datos.titulo}/>
      <ItemList/>    
    </div>
  ); 
}

export default App
