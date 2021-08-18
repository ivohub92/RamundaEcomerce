import React from 'react'
import {Card,Button, Container} from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import ItemCount from './ItemCount';
import bloodFantasy from "./media/bloodFantasy.png";
import blueVampirella from "./media/blueVampirella.png";
import charoline from "./media/charoline.png";
import redPoison from "./media/redPoison.png";
import redPriest from "./media/redPriest.jpg";







const ItemDetailContainer = ({id}) => {
    
    let {params} = useParams();//productos detallados
        const listaDetail =[
          {id:1, nombre:"Conjunto Blood Fantasy", descripcion:"Conjunto Sangriento", precio:"3000", imagen: bloodFantasy},
          {id:2, nombre:"Conjunto Blue Vampirella", descripcion:"Bella e inmortal", precio:"3000", imagen: blueVampirella},
          {id:3, nombre:"Body Charoline", descripcion:"Para los amantes del charol",precio:"3000", imagen: charoline},
          {id:4, nombre:"Conjunto Red Poison", descripcion:"Un rojo venenoso, para matar suavemete",precio:"3000", imagen: redPoison},
          {id: 5, nombre:"Vestido Red Priest", descripcion:"Sientete la saserdotisa mas bella",precio:"3000", imagen: redPriest }   
        ];
    
       


       const detalleProducto = listaDetail.filter(producto=>producto.id==params);
       
       
    
    
        return ( 
            <>
                  
    <Container class='itemBootstrap'>    
      <Card style={{ width: '20 rem' }}>
        <Card.Img variant="top" src={detalleProducto[0].imagen} />
        <Card.Body>
          <Card.Title>{detalleProducto[0].nombre}</Card.Title>
          <Card.Text>
            {detalleProducto[0].descripcion}
          </Card.Text>
          <Card.Text>{detalleProducto[0].precio}</Card.Text>
          <ItemCount stock={5} inicial={1} />                 
          
        </Card.Body>
      </Card>
    </Container>
    
        

        
   
        
            </>
         );
    }
     
    
    
    
    export default ItemDetailContainer;
