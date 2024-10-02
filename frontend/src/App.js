import React, { useEffect, useState } from "react";
import ProductPageWrapper from "./components/product_page/product_page_wrapper";
import NavbarComponent from "./components/navbar/navbar";
import Success from "./components/success";
import Cancel from "./components/cancel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route index element={<ProductPageWrapper />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
