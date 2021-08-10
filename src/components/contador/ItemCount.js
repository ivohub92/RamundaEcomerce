import React, {useState} from 'react';
import './ItemCount.css'
import {Card,Button, Container, Row} from "react-bootstrap";

function ItemCount({stock,inicial}) {
    const [counter, setCounter]= useState(0);
    const [mensaje, setMensaje] = useState("");
    
    const sumador= (stock) => {
        (counter<=(stock-1))? setCounter (counter+1): alert("Stock máximo!")
    }
    const resta= (inicial) => {
        (counter>=(inicial)) ? setCounter (counter-1):alert("Producto mínimo")
    }
    const agregarCarrito =() =>{
        setMensaje(`enviado ${counter} al carrito...`);
   }
     

    return(
        <Container >
            <p className="itemText">{counter}</p>
            <Container className="itemCount">
            <button className="botonItemCount" onClick= {() => (sumador(stock))}> +1 </button>
            <button className="botonItemCount"  onClick= {() => (resta(stock))}> -1 </button>
            <button className="botonItemCount"  onClick= {()=> agregarCarrito()}>Agregar a carrito</button>
            <p>{mensaje}</p>
            </Container>
        </Container>
    )
   
}
export default ItemCount