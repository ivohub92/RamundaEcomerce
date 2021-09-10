import { React, useState, useEffect } from "react";
import {getFirestore} from "../firebase/firebase";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  //    const [items, setItems] = useState([]);
  //
  //useEffect(() => {
  //getlistaProducs();
  //}, []);

  //const getlistaProducs = async () => {
  //try {
  //const res = await Promesa();
  //setItems(res);
  //} catch (err) {
  //console.log("Error al cargar los producs: ", err);
  //}
  //};

  const [items, setItems] = useState([]);

  useEffect(() => {
    getFirestore()
      .collection("items")
      .get()
      .then((data) => {
        const nuevosItems = data.docs.map((doc) => doc.data());
        setItems(nuevosItems);
      });
  }, []);
  return (
    <>
      <h2 className="text-center">Lista de producs</h2>
      <div className="fs-5 text-center d-flex m-au justify-content-center flex-wrap">
        <ItemList className="" items={items} />
      </div>
    </>
  );
}

export default ItemListContainer;
