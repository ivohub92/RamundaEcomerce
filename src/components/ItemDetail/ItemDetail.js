import React from 'react'
import {Container, Card, Col} from 'react-bootstrap';



function ItemDetail ({id, nombre , precio, descripcion, imagen}){

    return(
    <Container class='itemBootstrap'>    
      <Card style={{ width: '20 rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Card.Text>{precio}</Card.Text>
            
          
        </Card.Body>
      </Card>
    </Container>
    
        )

}

export default ItemDetail




