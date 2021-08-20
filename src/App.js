import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/navBar';
import ItemList  from './components/ItemListContainer/ItemList';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

const datos = {
  titulo : "Texto generico. Lorem ipsum y lo que sea"
}



function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer titulo={datos.titulo}/>
        </Route>
        <Route exact path="/productos">
        <ItemList/> 
        </Route>
        <Route path="/productos/:params">
        <ItemDetailContainer/>
        </Route>              
      </Switch>
      </BrowserRouter>   
    </div>
  ); 
}

export default App
