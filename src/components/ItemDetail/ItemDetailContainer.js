import React from 'react'
import {useState, useEffect} from 'react';

import bodyYume from "./media/bodyYume.png";
import conjuntoGalaxia from "./media/conjuntoGalaxia.png";
import vestidoMaid from "./media/vestidoMaid.png";
import vestidoMilicia from "./media/Vestidopng";
import vestidoRabbit from "./media/vestidoRabbit.jpg";
import vestidoSailor from "./media/vestidoSailor.jpg";

import ItemDetail from './ItemDetail';



const ItemDetailContainer = ({id}) => {
    //productos detallados
        const listaDetail =[{
            id:1,titulo:"Body Yume",descripcion:"Un boy floral, para las que les gusta la primavera en la pial", precio:2500 , imagen:bodyYume, opcion1:"papas francesas", opcion2: "papas rusticas"
        },
        {
            id:2,titulo:"Conjunto Galaxia",descripcion:"Un conjunto para sentirte una estrella", precio:2500 , imagen: conjuntoGalaxia, opcion1:"aros simples", opcion2:"doble rebozados"
        },
        {
            id:3,titulo:"Vestido Maid",descripcion:"Sencillo y bello, para las mas recatadas", precio:3000 ,imagen: vestidoMaid, opcion1:"Pan brioche", opcion2:"pan con semillas de sesámo"
        },
        {
            id:4,titulo:"Vestido Milicia",descripcion:"Clasico y único, una fantasía pin up", precio:3000 , imagen:vestidoMilicia, opcion1:"A base de tinta de calamar", opcion2:"A base de colorante artificial"
        },
        {
            id:5,titulo:"Vestido Rabbit",descripcion:"Para las conejitas inocentes y traviesas", precio:3000 , imagen:vestidoRabbit, opcion1:"A base de tinta de calamar", opcion2:"A base de colorante artificial"
        },
        {
            id:6,titulo:"Vestido Sailor",descripcion:"Para sentir esa fantasia maritima dentro tuyo", precio:3000 , imagen:vestidoSailor, opcion1:"A base de tinta de calamar", opcion2:"A base de colorante artificial"
        }
        
        ];
    
        //creacion del state
        
    const [datosItemDetail, setdatosItem] = useState("");
    
    //ejecucion promesa tardia
    useEffect(() => {
       
    //desarollo de la promesa Tardia
    
        const promesaTardia = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                 resolve(listaDetail);
            },2000)
        });
    
    //promesa
        promesaTardia
        .then((result)=>{ setdatosItem(listaDetallada[id]);
                    console.log(datosItemDetail);})
       }, [])
    
    
        return ( 
            <>
        
    <ItemDetail id={datosItemDetail.id} nombre={datosItemDetail.nombre} precio={datosItemDetail.precio} descripcion={datosItemDetail.descripcion} imagen={datosItemDetail.imagen} />
    
        
            </>
         );
    }
     
    
    
    
    export default ItemDetailContainer;
