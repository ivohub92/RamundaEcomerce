import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../helpers/listaProductos";
import ItemDetail from "../ItemListContainer/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [itemId]);

  return <ItemDetail className="" item={item} />;
}

export default ItemDetailContainer;

