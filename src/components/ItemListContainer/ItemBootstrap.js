import React from "react";
import {Card,Button, Container} from "react-bootstrap";
import ItemCount from "./ItemCount";
import './ItemBootstrap.css'



function ItemBootstrap({id,nombre, descripcion, precio,url}){


    return(
    <Container class='itemBootstrap'>    
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion/* Some quick example text to build on the card title and make up the bulk of
            the card's content. */}
          </Card.Text>
          <Card.Text>{precio}</Card.Text>
                
          <ItemCount stock={5} inicial={1} />
        </Card.Body>
      </Card>
    </Container>

    
    )
    
    
};
    
export default ItemBootstrap;