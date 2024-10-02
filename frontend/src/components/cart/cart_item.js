import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { getProductInfo } from "../../utils/getProductById";
import { Button, Form } from "react-bootstrap";

function CartItem({ product }) {
  const { deleteFromCart, removeOneFromCart, addOneToCart } =
    useContext(CartContext);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDeleteButtonHovered, setIsDeleteButtonHovered] = useState(false);

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
      <div className="d-flex flex-row gap-2 bg-light p-3">
        <div style={{ width: 100 }}>
          <img
            src={productData.imageUrl}
            alt="product preview"
            className="object-fit-cover rounded p-1 align-self-center w-100"
            height={100}
          />
        </div>
        <div className="w-100">
          <h4>{productData.name}</h4>
          <div className="d-flex flex-row justify-content-between h-auto">
            <Form className="d-flex align-items-center">
              <Button
                onClick={() => removeOneFromCart(product.id)}
                className="btn-outline-dark"
                variant="outline"
                size="sm"
              >
                -
              </Button>
              <Form.Label className="pb-1 mx-3 my-0">
                {product.quantity}
              </Form.Label>
              <Button
                onClick={() => addOneToCart(product.id)}
                className="p-0-5 btn-outline-dark"
                variant="outline"
                size="sm"
              >
                +
              </Button>
            </Form>
            <p className="m-0">
              $
              {((product.quantity * productData.priceInCents) / 100).toFixed(2)}
            </p>
          </div>
          <Button
            onMouseEnter={() => setIsDeleteButtonHovered(true)}
            onMouseLeave={() => setIsDeleteButtonHovered(false)}
            className="btn-outline-danger mt-2"
            variant="outline"
            size="sm"
            onClick={() => deleteFromCart(product.id)}
          >
            Remove
          </Button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default CartItem;
