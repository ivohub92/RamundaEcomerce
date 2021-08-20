import React from "react";
import {Card,Button, Container} from "react-bootstrap";
import ItemCount from "./ItemCount";
import './Item.css';
import { useParams, useHistory } from "react-router-dom";




function Item({id,nombre, descripcion, precio,url}){

   // let {params} = useParams();
  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/productos/${id}`);
  };




    return(
       
      <Card  className="itemCard">
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
        <button onClick={()=>handleNavigation(id)}>ver detalles</button>
      </Card>
    

    
    )
    
    
};
    
export default Item;