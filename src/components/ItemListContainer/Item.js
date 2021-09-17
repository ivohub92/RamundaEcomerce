import React from "react";
import {Card} from "react-bootstrap";
import './Item.css';
import { useHistory } from "react-router-dom";



function Item({id, price, description, pictureURL, title}){

   // let {params} = useParams();
  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/Item/${id}`);
  };


    return(
       
      <Card  className="itemCard">
        <Card.Img variant="top" src={pictureURL} />
        <Card.Body>
          <Card.Title> { title }</Card.Title>
          <Card.Text> { description }</Card.Text>
          <Card.Text>$ {price} </Card.Text>          
        </Card.Body>
        <button onClick={()=>handleNavigation(id)}>ver detalles</button>
      </Card>
    

    
    )
    
    
};
    
export default Item;