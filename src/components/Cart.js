import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../components/context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";

/* const sumaTotal = () => {
  const { items } = useContext(CartContext);
  items.reduce((acc, cur) => acc + cur.price);
  console.log(sumaTotal());
}; */

const Cart = () => {
  const { items, cartSize, clear, removeItems } = useContext(CartContext);
  console.log("items", items);
  console.log("cartsize", cartSize);
  return (
    <div>
      <div className="container padding-bottom-3x mb-1">
        {/* Shopping Cart*/}
        <div className="table-responsive shopping-cart">
          {/* COMIENZO DE TABLA */}
          <table className="table">
            {/*  COMIENZO DEL ENCABEZADO DE LA TABLA */}
            <thead>
              <tr>
                <th>Producto</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Subtotal</th>

                <th className="text-center">
                  <a
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => clear()}
                  >
                    Vaciar
                  </a>
                </th>
              </tr>
            </thead>
            {/*  COMIENZO DEL CUERPO */}
            <tbody>
              {/* COMIENZO DE ITEM */}
              {cartSize > 0 ? (
                items.map((product, i) => (
                  <tr key={i}>
                    <td>
                      <div className="product-item">
                        <a className="product-thumb" href="#">
                          <img
                            /*  src="https://via.placeholder.com/220x180/5F9EA0/000000" */
                            src={product.item.pictureURL}
                            alt="Producto"
                          />
                        </a>
                        <div className="product-info">
                          <h4 className="product-title">
                            <a href="#">{product.item.title}</a>
                          </h4>
                          <span>
                            <em>Autor:</em> XXXX
                          </span>
                          <span>
                            <em>Institución:</em> XXXX
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="count-input">
                        <select className="form-control">
                          <option>{product.quantity}</option>
                        </select>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium">
                      ${product.item.price * product.quantity}
                    </td>

                    <td className="text-center">
                      <a
                        className="remove-from-cart"
                        href="#"
                        data-toggle="tooltip"
                        title
                        data-original-title="Remove item"
                      >
                        <FaTrashAlt
                          onClick={() => removeItems(product.item.id, 1)}
                          size=""
                          color="red"
                          className=""
                        />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <Link to="/" style={{ textDecoration: "none" }}>
                  No hay productos, volver a inicio
                </Link>
              )}
              {/*   FIN DE ITEMS  */}
            </tbody>
          </table>
        </div>
        <div className="shopping-cart-footer">
          <div className="column">
            <form className="coupon-form" method="post">
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Código del Cupón"
                required
              />
              <button className="btn btn-outline-primary btn-sm">
                Aplicar Cupón
              </button>
            </form>
          </div>
          <div className="column text-lg">
            Total:{" "}
            <span className="text-medium">
              $
              {items.reduce(
                (acc, cur) => cur.item.price * cur.quantity + acc,
                0
              )}
            </span>
          </div>
        </div>
        <div className="shopping-cart-footer">
          <div className="column">
            <Link className="btn btn-outline-secondary" to="/">
              <i className="icon-arrow-left" />
              &nbsp;Volver
            </Link>
          </div>
          <div className="column">
            <Button as={Link} to="/finalizar-compra">
              Finalizar compra
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
