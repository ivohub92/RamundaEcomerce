import React, {useState} from 'react';
import './ItemCount.css'
import {Card,Button, Container, Row} from "react-bootstrap";

function ItemCount({stock,inicial}) {
    const [counter, setCounter]= useState(inicial);
    const [mensaje, setMensaje] = useState("");
    
    const sumador= () => {
        if (counter<=stock-1 ){
            setCounter(counter+1)
        }else{
            alert("Producto maximo")
        }
    }
    const resta= () => {
        
        if (counter>=inicial+1 ){
            setCounter(counter-1)
        }else{
            alert("Producto minimo")
        }
    }
    const onAdd =() =>{
        if(counter<=stock || counter>=inicial ){
        setMensaje(`enviado ${counter} al carrito...`);
        }else{
            setMensaje('Ingrese un numero valido de productos')
        }

    }
     

    return(
        <Container >
            <p className="itemText">{counter}</p>
            <Container className="itemCount">
                <button className="botonItemCount" onClick= {() => (sumador())}> +1 </button>
                <button className="botonItemCount"  onClick= {() => (resta())}> -1 </button>
                <button className="botonItemCount"  onClick= {()=> onAdd()}>Agregar a carrito</button>
            </Container>
            <div>
                <p>{mensaje}</p>
            </div>
        </Container>
    )
   
}
export default ItemCount