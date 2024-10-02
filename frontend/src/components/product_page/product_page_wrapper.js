import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../../utils/fetchAllProducts";
import ProductItem from "./product_item";

function ProductPageWrapper() {
  const [products, setProducts] = useState([]);
console.log('products', products)
  const getProducts = async () => {
    try {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
    } catch (e) {
      new Error("Could not fetch products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1></h1>
      <div className="row">
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPageWrapper;
