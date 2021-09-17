import { React, useState,  useEffect, useContext } from "react";
import { Card,  } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";




function ItemDetail({ item }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setSelectedItem(quantity);
    addItem(item, quantity);
  };

  return (
    <Card className="text-center m-auto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Detalle del producto</Card.Text>
        <p>${item.price}</p>

        {setSelectedItem > 0 ? (
          <Link to="/cart" onClick={() => addItem(item, selectedItem)}>
            <button className="btn btn-dark">
              Agregar {setSelectedItem} al carrito
            </button>
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </Card.Body>
    </Card>
  );
}


export default ItemDetail;
