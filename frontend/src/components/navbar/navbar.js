import React, { useState, useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";
import CartModal from "../cart/cart_modal";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const { items } = useContext(CartContext);
  const productCount = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">CozyThreads</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={() => setShow(true)}>{`Cart (${productCount} ${
            productCount === 1 ? "item" : "items"
          })`}</Button>
        </Navbar.Collapse>
      </Navbar>
      <CartModal show={show} onClose={() => setShow(false)} />
    </>
  );
}

export default NavbarComponent;
