import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { listaProductos } from '../helpers/listaProductos';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
 //creacion del state   
  const [datosItemDetail, setdatosItem] = useState({});
  const {itemId}= useParams();
  
  const getItem= (itemId) => {
  const ItemProds = listaProductos.find((prods) => prods.id == itemId);
  setdatosItem(ItemProds);
};
useEffect(() => {
  getItem(itemId);
},[]);

return <ItemDetail className="" item={datosItemDetail} />;
}

export default ItemDetailContainer;



