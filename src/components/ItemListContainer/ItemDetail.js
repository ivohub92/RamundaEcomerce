import React from 'react'
import {Card, Container} from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { listaProductos } from '../helpers/listaProductos';
import ItemCount from './ItemCount';








const ItemDetailContainer = ({id}) => {
    
    let {itemId} = useParams();//productos detallados
            
        const detalleProducto = listaProductos.filter(producto=>producto.id==itemId);
       
       
    
    
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
