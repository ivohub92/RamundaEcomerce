import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/navBar/navBar";
import ItemDetailContainer from "../components/ItemListContainer/ItemDetailContainer"
import Checkout from "../components/Checkout";
import {Cart} from "../components/navBar/Cart"
import NotFound from "../components/notFound"; 



const Router = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/category/:categoryId" component={ItemListContainer}/>
                <Route exact path="/" component={ItemListContainer} />
                <Route exact path="/item/:itemId"  component={ItemDetailContainer} />
                <Route exact path="/cart" component={Cart} /> 
                <Route path="/terminar-compra" component={Checkout} /> 
                <Route path="*" component={NotFound} />                            
            </Switch>
      </BrowserRouter>
   
    )
}
export default Router