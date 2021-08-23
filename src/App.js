import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/navBar';
import ItemList  from './components/ItemListContainer/ItemList';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';



function App() {
  return(
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/productos">
          <ItemList/> 
        </Route>
        <Route path="/Item/:params">
        <ItemDetailContainer/>
        </Route>              
      </Switch>
      </BrowserRouter>   
     
    </div>
  ); 
}

export default App
