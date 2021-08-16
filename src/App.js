import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/navBar';
import ItemList  from './components/ItemListContainer/ItemList';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const datos = {
  titulo : "Texto generico. Lorem ipsum y lo que sea"
}



function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/home">
          <ItemListContainer titulo={datos.titulo}/>
        </Route>
        <Route exact path="/productos">
        <ItemList/> 
        </Route>      
      </Switch>
      </BrowserRouter>   
    </div>
  ); 
}

export default App
