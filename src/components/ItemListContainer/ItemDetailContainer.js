import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemListContainer/ItemDetail";

import { useParams } from "react-router-dom";
// REMOTE ITEMS NO VA MAS --> HAY QUE CAMBIAR A FIRESTORE
import { getProductById } from "../helpers/listaProductos";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [itemId]);

  return <ItemDetail className="" item={item} />;
  // return (
  //   <>
  //     {loading && <h1>Cargando...</h1>}
  //     {!loading && <ItemDetail className="" item={item} />}
  //   </>
  // );
}

export default ItemDetailContainer;

