import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


const Router = () => {
    return(
        <BrowserRouter>
            <switch>
                <Route exact path="/home" component= {ItemListContainer} />

            </switch>
        </BrowserRouter>
    )
}
export default Router