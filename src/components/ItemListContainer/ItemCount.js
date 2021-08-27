import React, {useState} from 'react';
import './ItemCount.css'
import {Container} from "react-bootstrap";

function ItemCount({stock,initial, onAdd}) {
    const [counter, setCounter]= useState(initial);
    
    
    const sumador= () => {
        if (counter<stock ){
            setCounter(counter+1)
        }else{
            alert("Producto maximo")
        }
    }
    const resta= () => {
        
        if (counter>0 ){
            setCounter(counter-1)
        }else{
            alert("Producto minimo")
        }
    }
  
     
    return(
        <Container >
            <p className="itemText">Cantidad seleccionada: {counter}</p>
            <Container className="itemCount">
                <button className="botonItemCount" onClick= {() => (sumador())}> +1 </button>
                <button className="botonItemCount"  onClick= {() => (resta())}> -1 </button>
                <button className="botonItemCount"  onClick= {()=> onAdd(counter)}>Agregar a carrito</button>
            </Container>
           
        </Container>
    )
   
}
export default ItemCount