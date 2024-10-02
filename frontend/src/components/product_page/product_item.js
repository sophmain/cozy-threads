import React, { useContext } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";

function ProductItem({ product }) {
  const { getProductQuantity, addOneToCart, removeOneFromCart } =
    useContext(CartContext);
  const productQuantity = getProductQuantity(product.id);

  return (
    <div className="col-4 mb-4" key={product.name}>
      <Card className="h-100">
        <Card.Img
          variant="top"
          className="object-fit-cover"
          src={product.imageUrl}
          alt={product.name}
          height={300}
        />
        <Card.Body>
          <Card.Title className="font-weight-bold text-truncate">
            {product.name}
          </Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text className="truncate-text">{product.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-end">
            {productQuantity > 0 ? (
              <Button className="bg-dark border-dark text-white" onClick={() => addOneToCart(product.id)}>
                Added to cart
              </Button>
            ) : (
              <Button className="btn-outline-dark" onClick={() => addOneToCart(product.id)}>
                Add to cart
              </Button>
            )}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProductItem;
