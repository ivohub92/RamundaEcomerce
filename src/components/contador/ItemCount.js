import React from 'react';

function ItemCount({stock,inicial}) {
    const [counter, setCounter]= React.useState({inicial})
    const sumador= () => {
         setCounter (counter+1)
    }
    const resta= () => {
        setCounter (counter-1)
    }
    const alert1= () => {
        {alert("STOCK AGOTADO")}
    }
    
    const alert2= () => {
        {alert("VALOR INVALIDO")}
    }
    

    return(
        <div className="itemCount">
            <p>{counter}</p>
            <button onClick= {() => (counter< {stock}? sumador: alert1)}> +1 </button>
            <button onClick= {() => (counter> 0 ? resta: alert2 )} >-1</button>
        </div>
    )
   
}
export default ItemCount