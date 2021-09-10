import React, {useState} from 'react';
import './ItemCount.css'
import {Container} from "react-bootstrap";

const ItemCount =({ counter, from, setCounter, to, onAdd }) => {
    const addCounter = () =>{
        if (to === counter) return;
        setCounter(counter + 1);
    };
    const subsCounter = () =>{
        if (from === counter) return;
        setCounter(counter - 1)
    };

    return(
        <Container >
            <p className="itemText">Cantidad seleccionada: {counter}</p>
            <Container className="itemCount">
                <button className="botonItemCount" action={addCounter}> +1 </button>
                <button className="botonItemCount" action={subsCounter}> -1 </button>
                <button className="botonItemCount"  onClick= {()=> onAdd(counter)}>Agregar a carrito</button>
            </Container>
           
        </Container>
    )
   
}
export default ItemCount