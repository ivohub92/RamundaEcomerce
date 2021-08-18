import React from "react";
import Item from "./Item";

//Importo fotos
import bloodFantasy from "./media/bloodFantasy.png";
import blueVampirella from "./media/blueVampirella.png";
import charoline from "./media/charoline.png";
import redPoison from "./media/redPoison.png";
import redPriest from "./media/redPriest.jpg";

function ItemList () {
    const listaProductos= [
        {id:1, nombre:"Conjunto Blood Fantasy", descripcion:"", precio:"3000", url: bloodFantasy},
        {id:2, nombre:"Conjunto Blue Vampirella", descripcion:"", precio:"3000", url: blueVampirella},
        {id:3, nombre:"Body Charoline", descripcion:"",precio:"3000", url: charoline},
        {id:4, nombre:"Conjunto Red Poison", descripcion:"",precio:"3000", url: redPoison},
        {id: 5, nombre:"Vestido Red Priest", descripcion:"",precio:"3000", url: redPriest }     
    ]

    
    const promesa= () => new Promise((resolve,reject)=> 
    {
        setTimeout(()=>{resolve(listaProductos)},2000);
    });

    //ejecuto la promesa

    promesa()
    .then(
        (result)=> (console.log(result)),
        (err)=>(console.log(err)))//cierro then
        
    .finally( 
        () => {console.log("Finalizó la promesa");}
    );
    
    return(
            <div>
                <h1 style={{ textAlign: 'center' }}>Productos</h1>
                <div className="itemList">
                    {listaProductos.map(producto=>
                    <Item id={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} url={producto.url}/>
                    )}
                </div>
            </div>
        )
            
    }//cierre ItemList
    export default ItemList

    