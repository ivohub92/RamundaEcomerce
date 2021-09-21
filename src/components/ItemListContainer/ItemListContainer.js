import { React, useState, useEffect } from "react";
import { getFirestore } from "../firebase/firebase";
import { listCallback } from "../helpers/listaProductos";
import ItemList from "../ItemListContainer/ItemList";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFirestore()
      .collection("items")
      .get()
      .then((res) => {
        const items = listCallback(res);
        setItems(items);
      });
  }, []);

    return (
    <div className="fs-5  text-center d-flex m-auto justify-content-center flex-wrap ">
      <ItemList className="" items={items} />
    </div>
  );
}

export default ItemListContainer;
