import { React, useState, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const [selectItem, setSelectItem] = useState(0);
  //me traigo la función addItem de mi context
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setSelectItem(quantity);
    addItem(item, quantity);
  };

  return (
    <>
      <Container class="itemBootstrap">
        <Card style={{ width: "20 rem" }}>
          <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            <Card.Text>{item.precio}$</Card.Text>
            {setSelectItem > 0 ? (
              <Link to="/cart" onClick={() => addItem(item, selectItem)}>
                <button className="btn btn-dark">
                  Agregar {setSelectItem} al carrito
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
};

export default ItemDetail;
