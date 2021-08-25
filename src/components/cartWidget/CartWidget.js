import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


function CartWidget() {
const { cartSize } = useContext(CartContext);
  
  return (
    <Link to="/cart">
      <FaShoppingCart size="1.5rem" className="" />
        <span style={{ marginRight: 150 }}>
            {cartSize()}        
        </span></Link>
  );
}
export default CartWidget;
