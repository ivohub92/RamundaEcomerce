import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";

export const Cart = () => {
  const { items, cartSize, clear, removeItems } = useContext(CartContext);
  return (
    <div>
      <div className="container padding-bottom-3x mb-1">
        <div className="table-responsive">
          <table className="table">
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
            <tbody>
              {cartSize > 0 ? (
                items.map((product, i) => (
                  <tr key={i}>
                    <td>
                      <div className="product-item">
                        <img src={product.item.pictureURL} width="200vh" />

                        <div className="product-info">
                          <h4 className="product-title">
                            {product.item.title}
                          </h4>
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
              
            </tbody>
          </table>
        </div>
        <Container>
          <Row>
            <Col>
              <form className="coupon-form" method="post">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Código del Cupón"
                  required
                />
                <button className="btn btn-outline-primary btn-sm">
                  {" "}
                  Aplicar Cupón{" "}
                </button>
              </form>
            </Col>
            <Col>
              Total:{" "}
              <span className="text-medium">
                $
                {items.reduce(
                  (acc, cur) => cur.item.price * cur.quantity + acc,
                  0
                )}
              </span>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Link className="btn btn-outline-secondary" to="/">
              <i className="icon-arrow-left" />
              &nbsp;Volver
            </Link>
            <Button className="btn btn-primary" as={Link} to="/terminar-compra">
              Finalizar compra
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cart;
