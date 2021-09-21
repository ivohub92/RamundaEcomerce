import { React, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemListContainer/ItemCount";



function ItemDetail({ item }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setSelectedItem(quantity);
    addItem(item, quantity);
  };

  return (
    <Card className="text-center m-auto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureURL} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${item.price}</p>        
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />        
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
