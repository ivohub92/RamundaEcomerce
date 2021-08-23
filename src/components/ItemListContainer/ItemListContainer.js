import { React, useState, useEffect } from "react";
import { Promesa } from "../helpers/listaProductos";
import './ItemListContainer.css';
import ItemList from "./ItemList";



function ItemListContainer(props) {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      getlistaProductos();
    }, []);
  
    const getlistaProductos = async () => {
      try {
        const res = await Promesa();
        setItems(res);
      } catch (err) {
        console.log("Error al cargar los productos: ", err);
      }
    };
  
    return (
        <>
        <h2 className="text-center">Lista de productos</h2>
        <div className="fs-5 text-center d-flex m-auto justify-content-center flex-wrap">
            <ItemList className="" items={items} />
        </div>
        </>
    );
  }
  
  export default ItemListContainer;

