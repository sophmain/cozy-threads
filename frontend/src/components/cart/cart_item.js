import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { getProductInfo } from "../../utils/getProductById";
import { Button } from "react-bootstrap";

function CartItem({ product }) {
  const { deleteFromCart } = useContext(CartContext);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const data = await getProductInfo(product.id); // Fetch the product info
        setProductData(data); // Set the product data
      } catch (error) {
        console.error("Error fetching product info:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchProductData();
  }, [product.id]);

  if (loading) {
    return <div>Loading product data...</div>;
  }

  if (!productData) {
    return <div>Error loading product data</div>; // Handle the case where product data fails to load
  }

  return (
    <div>
      <h3>{productData.name}</h3>
      <p>{product.quantity} total</p>
      <p>${((product.quantity * productData.priceInCents) / 100).toFixed(2)}</p>
      <Button size="sm" onClick={() => deleteFromCart(product.id)}>
        Remove
      </Button>
      <hr></hr>
    </div>
  );
}

export default CartItem;
