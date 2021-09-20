import React, {useState} from 'react';
import './ItemCount.css'
import {Container} from "react-bootstrap";


function ItemCount ({ stock, initial, onAdd }) {
    const [counter, setCounter] = useState(initial);

    const addCounter = () =>{
        if (counter > initial) return;
        setCounter(counter + 1);
    };
    const subsCounter = () =>{
        if (counter < stock) return;
        setCounter(counter - 1)
    };

    return(
        <Container >
            <p className="itemText">Cantidad seleccionada: {counter}</p>
            <Container className="itemCount">
                <button className="botonItemCount" onClick={addCounter}> +1 </button>
                <p >{counter}</p>
                <button className="botonItemCount" onClick={subsCounter}> -1 </button>
                <button className="botonItemCount"  onClick= {()=> onAdd(counter)}>Agregar a carrito</button>
            </Container>
           
        </Container>
    )
   
}
export default ItemCount