import React from "react";
import ProductPageWrapper from "./components/products/product_page_wrapper";
import NavbarComponent from "./components/navbar/navbar";
import Success from "./components/success";
import NotFound from "./components/not_found";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./contexts/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Container>
          <NavbarComponent />

          <Routes>
            <Route index element={<ProductPageWrapper />} />
            <Route path="success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
