import React, {useState} from 'react';
import './ItemCount.css'
import {Container} from "react-bootstrap";


function ItemCount ({ stock, initial, onAdd }) {
    const [counter, setCounter] = useState(initial);

    const subsCounter = () =>{
        if (counter > initial) return;
        setCounter(counter + 1);
    };
    const addCounter = () =>{
        if (counter < stock) return;
        setCounter(counter - 1)
    };

    return(
        <Container >
            <p className="itemText">Cantidad seleccionada: {counter}</p>
            <Container className="itemCount">
                <button className="botonItemCount" action={addCounter}> +1 </button>
                <p >{counter}</p>
                <button className="botonItemCount" action={subsCounter}> -1 </button>
                <button className="botonItemCount"  onClick= {()=> onAdd(counter)}>Agregar a carrito</button>
            </Container>
           
        </Container>
    )
   
}
export default ItemCount