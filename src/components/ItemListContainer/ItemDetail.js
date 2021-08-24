import {React, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({item}) => {

  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const onAdd = (i) => {
    setQuantityToAdd(i);
  };
          
    
        return ( 
            <>
                  
    <Container class='itemBootstrap'>    
      <Card style={{ width: '20 rem' }}>  
      <Card.Img variant="top" src={item.imagen} />      
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
            {item.descripcion}
          </Card.Text>
          <Card.Text>{item.precio}$</Card.Text>
          
        {quantityToAdd > 0 ? (
          <Link to="/cart"> <button className="btn btn-dark"> Agregar {quantityToAdd} al carrito
            </button>
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
                 
        </Card.Body>
      </Card>
    </Container>
    
        

        
   
        
            </>
         );
    }
     
    
    
    
    export default ItemDetail;
