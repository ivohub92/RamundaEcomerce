import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";



function addItem({ id, precio, nombre, imagen, descripcion, stock }, index) {
    return (
      <div className="">
        <Item key={index} id={id} nombre={nombre} precio={precio} imagen={imagen}
        stock={stock} descripcion= {descripcion}
        />
      </div>
    );
  }

function ItemList ({items}) {
        
     useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
      }, [items]);
    
      //creo un parametro por id
      const { categoryId } = useParams();
      //filtro
      return categoryId
        ? items
            .filter((products) => products.category == categoryId)
            .map((products) => addItem(products))
        : items.map((products) => addItem(products));
    }
    
    export default ItemList;
    

    