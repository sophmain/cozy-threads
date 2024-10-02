import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAllProducts } from "../../utils/fetchAllProducts";
import ProductItem from "./product_item";
import { Card, Placeholder } from "react-bootstrap";

function ProductPageWrapper() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = new URLSearchParams(useLocation().search);
  const searchTerm = params.get("search");

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
      setFilteredProducts(allProducts);
      setIsLoading(false);
    } catch (e) {
      new Error("Could not fetch products");
      setIsLoading(false);
    }
  };

  // Search logic
  useEffect(() => {
    if (!!searchTerm?.length) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If no search term, show all products
    }
  }, [searchTerm]);

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
            <Card className="h-100">
              <Placeholder
                as="div"
                variant="top"
                className="bg-secondary"
                style={{ height: "300px" }}
              />
              <Placeholder as="div" animation="glow" className="p-2">
                <Placeholder xs={12} />
              </Placeholder>

              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} />
                  <Placeholder xs={4} />
                  <Placeholder xs={4} />
                </Placeholder>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        {filteredProducts?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPageWrapper;
