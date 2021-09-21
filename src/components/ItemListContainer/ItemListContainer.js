import { React, useState, useEffect } from "react";
import ItemList from "../ItemListContainer/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore } from "../firebase/firebase";
import { listCallback } from "../helpers/listaProductos";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFirestore()
      .collection("items")
      .get()
      .then((res) => {
        const items = listCallback(res);
        console.log(items);
        setItems(items);
      });
  }, []);

  // LOADING - probar implementar, tengo errores
  //////////////////////////////////////////////
  // const [loading, setLoading] = useState("");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  // return (
  //   <>
  //     {loading ? (
  //       <h1>Loading...</h1>
  //     ) : (
  //       <div className="fs-5  text-center d-flex m-auto justify-content-center flex-wrap ">
  //         <ItemList className="" items={items} />
  //       </div>
  //     )}
  //   </>
  // );
  //////////////////////////////////////////////
  return (
    <div className="fs-5  text-center d-flex m-auto justify-content-center flex-wrap ">
      <ItemList className="" items={items} />
    </div>
  );
}

export default ItemListContainer;
