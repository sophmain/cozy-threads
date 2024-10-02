import { Button, Modal } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./cart_item";

function CartModal({ show, onClose }) {
  const { items, totalCost } = useContext(CartContext);
  const productCount = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  async function checkout() {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response.url) {
            window.location.assign(response.url); // sends user to stripe
          }
        });
    } catch (err) {
      console.error(err.message);
      throw err; // Re-throw the error so it can be handled where the function is called
    }
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart({productCount} items)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productCount > 0 ? (
          <>
            <h2>Items in your cart:</h2>
            {items.map((product, i) => (
              <CartItem key={i} product={product} />
            ))}

            <h1>Total: ${totalCost.toFixed(2)}</h1>
            <Button variant="success" onClick={checkout}>
              Purchase
            </Button>
          </>
        ) : (
          <h2>There are no items in your cart!</h2>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default CartModal;
