import React from "react";
import {Card} from "react-bootstrap";
import './Item.css';
import { useHistory } from "react-router-dom";



function Item({id,nombre, descripcion, precio, imagen}){

   // let {params} = useParams();
  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/Item/${id}`);
  };


    return(
       
      <Card  className="itemCard">
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Card.Text>{precio}</Card.Text>          
        </Card.Body>
        <button onClick={()=>handleNavigation(id)}>ver detalles</button>
      </Card>
    

    
    )
    
    
};
    
export default Item;