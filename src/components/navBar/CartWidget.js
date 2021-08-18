//DESAFIO crear un icono e insertalo en el navBar
import React from "react";
import Imagenwidget from "./media/logo.png";
import { Link} from "react-router-dom";
import '../navBar/Cart.css';



function CartWidget(){
    return(
        <Link className="link" to="/"><img style={{ width:"10vw"}} src={Imagenwidget} alt="mi logo"/></Link>
    );
    }
    
    export default CartWidget;