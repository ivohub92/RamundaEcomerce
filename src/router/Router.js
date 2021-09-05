import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/navBar/navBar";
import ItemDetailContainer from "../components/ItemListContainer/ItemDetailContainer"
import Cart from "../components/Cart";
import NotFound from "../components/notFound"; 



const Router = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/category/:categoryId" component={ItemListContainer}/>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/Item/:itemId"  component={ItemDetailContainer} />
                <Route path="*" component={NotFound} />
                <Route exact path="/cart" component={Cart} />              
            </Switch>
      </BrowserRouter>
   
    )
}
export default Router