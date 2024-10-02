import React, { useState, useContext } from "react";
import { Button, Navbar, Form, FormControl, InputGroup } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";
import CartModal from "../cart/cart_modal";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { items } = useContext(CartContext);
  const navigate = useNavigate();
  const productCount = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${searchTerm}`); // Redirect to /products with search param
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      handleClearSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    navigate(`/`);
  };

  return (
    <>
      <Navbar expand="sm" className="d-flex flex-row justify-content-between">
        <Navbar.Brand href="/">
          <img src="logo.png" alt="logo" height={80} />
        </Navbar.Brand>
        {/* Search Bar */}
        <Form className="d-none d-sm-flex w-50" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search by title or description"
            className="me-2 text-truncate w-100"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button type="submit" variant="outline" className="btn-outline-secondary">
            Search
          </Button>
        </Form>
        <Button
          className="btn-dark text-nowrap"
          onClick={() => setShow(true)}
        >{`Cart (${productCount} ${
          productCount === 1 ? "item" : "items"
        })`}</Button>
      </Navbar>
      <CartModal show={show} onClose={() => setShow(false)} />
    </>
  );
}

export default NavbarComponent;
