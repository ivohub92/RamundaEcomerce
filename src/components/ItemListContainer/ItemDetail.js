import { React, useState,  useEffect, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "../firebase/firebase";

const ItemDetail = () => {

const FROM= 1;
const { addItem, items } = useContext(CartContext);
const {item, setItem}= useState(null);
const {quantity, setQuantity}= useState(1);
const {disabledAddToCart, setDisabledAddToCart}= useState(false)

useEffect (() => {
  const db = getFirestore();
  const itemCollection= db.collection("item");
  const currentItem = itemCollection.doc(id);

  currentItem.get().then((document) =>{
    if (!document.exist){
      console.log("no item");
      return;
    }
    setItem({ id:document.id, ...document.data()
    });
  }, [id]);


  useEffect(() => {
    if (items.length>0) {
      const isDisabled = items.some(
        (currentItem) => currentItem.item.item.id === item.id
      );
      setDisabledAddToCart(isDisabled);
    }
  }, [items]);

  console.log("item",item);
  if (!item) return <div>Loading....</div>

})
 const handleItemToCart = () => {
   addItem( { item, quantity} );
 }
  return (
    <>
      <Container class="itemBootstrap">
        <Card style={{ width: "20 rem" }}>
          <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            <Card.Text>{item.precio}$</Card.Text>
            <button disabled={disabledAddToCart} onClick={handleItemToCart}> Agregar a carrrito </button>

              <ItemCount counter={quantity} from={FROM} setCounter={setQuantity} to={item.stock}/>
            </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ItemDetail;
