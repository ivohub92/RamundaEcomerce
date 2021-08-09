import React from 'react';

function ItemCount(stock,inicial){
    const [counter, setCounter]= React.useState(inicial)
    const sumador= () => {
         setCounter (counter+1)
    }
    const resta= () => {
        setCounter (counter-1)
    }
    if (counter>=0 || counter<=stock ){
        return(
            <div className="itemCount">
                <p>{counter}</p>
                <button onClick= {sumador}> +1 </button>
                <button onClick= {resta}>-1</button>
            </div>
        )
        
    }else{
        return(
            <div className="itemCount">
                <p> STOCK AGOTAD0!</p>
            </div>
        )
    }
   
}
export default ItemCount


