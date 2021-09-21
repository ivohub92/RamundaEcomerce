import Item from "../ItemListContainer/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function addItem({ id, price, title, pictureURL, category, stock }, index) {
  return (
    <div className="">
      <Item
        key={index}
        id={id}
        title={title}
        price={price}
        pictureURL={pictureURL}
        category={category}
        stock={stock}
      />
    </div>
  );
}

function ItemList({ items }) {
  //guardo en el localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //creo un parametro por id
  const { categoryId } = useParams();
  //filtro
  return categoryId
    ? items
        .filter((products) => products.categoryName == categoryId)
        .map((products) => addItem(products))
    : items.map((products) => addItem(products));
}

export default ItemList;
