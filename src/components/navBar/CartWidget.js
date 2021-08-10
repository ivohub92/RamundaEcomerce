//DESAFIO crear un icono e insertalo en el navBar
import React from "react";
import Imagenwidget from "./media/logo.png";



function CartWidget(){
    return(
        <img style={{ width:"10%"}} src={Imagenwidget} alt="mi logo"/>
    );
    }
    
    export default CartWidget;